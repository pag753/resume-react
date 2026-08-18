import { useNavigate } from 'react-router-dom';
import { sendTelegramEvent, TELEGRAM_EVENT_TYPES } from '../js/telegram';

const PDF_BY_LANGUAGE = {
  english: 'PDFEnglish.pdf',
  spanish: 'PDFSpanish.pdf',
};

const DOWNLOAD_EVENT_BY_LANGUAGE = {
  english: TELEGRAM_EVENT_TYPES.DOWNLOAD_ENGLISH,
  spanish: TELEGRAM_EVENT_TYPES.DOWNLOAD_SPANISH,
};

function Complements() {
  const navigate = useNavigate();
  const goTo = (route) => {
    navigate(route);
  };

  const downloadPDF = async (language) => {
    const selectedLanguage = language === 'spanish' ? 'spanish' : 'english';
    const pdf = PDF_BY_LANGUAGE[selectedLanguage];

    try {
      const response = await fetch(pdf);

      if (!response.ok) {
        throw new Error(`Unable to download ${pdf}`);
      }

      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = fileURL;
      link.download = pdf;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileURL);

      sendTelegramEvent(DOWNLOAD_EVENT_BY_LANGUAGE[selectedLanguage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button type="button" onClick={() => goTo('/')}>English</button><br />
      <button type="button" onClick={() => goTo('/spanish')}>Spanish</button><br />
      <button type="button" onClick={() => downloadPDF('english')}><i className="fa fa-file-pdf" aria-hidden="true" /> PDF English</button><br />
      <button type="button" onClick={() => downloadPDF('spanish')}><i className="fa fa-file-pdf" aria-hidden="true" /> PDF Spanish</button>
    </div>
  );
}
export default Complements;
