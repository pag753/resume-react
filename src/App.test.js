import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

jest.mock('./js/telegram', () => ({
  TELEGRAM_EVENT_TYPES: {
    VIEW_ENGLISH: 1,
    VIEW_SPANISH: 2,
    DOWNLOAD_ENGLISH: 3,
    DOWNLOAD_SPANISH: 4,
  },
  sendTelegramEvent: jest.fn(),
}));

test('renders the English resume by default', () => {
  global.IS_REACT_ACT_ENVIRONMENT = true;

  const container = document.createElement('div');
  const root = createRoot(container);

  document.body.appendChild(container);

  act(() => {
    root.render(<App language="english" />);
  });

  expect(container.querySelector('h1')).toHaveTextContent(/pablo de jes.s/i);
  expect(container.textContent).toMatch(/full stack developer/i);
  expect(container.textContent).toMatch(/career summary/i);

  act(() => {
    root.unmount();
  });

  container.remove();
});
