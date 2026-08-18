import axios from 'axios';

export const TELEGRAM_EVENT_TYPES = Object.freeze({
  VIEW_ENGLISH: 1,
  VIEW_SPANISH: 2,
  DOWNLOAD_ENGLISH: 3,
  DOWNLOAD_SPANISH: 4,
});

function getDevice() {
  if (typeof navigator === 'undefined' || !navigator.userAgent) {
    return 'unknown';
  }

  return navigator.userAgent;
}

export async function sendTelegramEvent(tipo) {
  try {
    await axios.post('/telegram', {
      tipo,
      device: getDevice(),
    });

    return true;
  } catch (error) {
    return false;
  }
}
