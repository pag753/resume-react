import { useNavigate,  } from "react-router-dom";
import axios from "axios";
function Complements() {
    const navigate = useNavigate();
    const goTo = (route) => {
        navigate(route)
    }

    const downloadPDF = (languaje) => {
        const pdf = (languaje === 'spanish')? 'PDFSpanish.pdf' : 'PDFEnglish.pdf'
        const tipo = (languaje === 'spanish')? 4 : 3
        fetch(pdf).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = pdf;
                alink.click();
            });
            axios.get('/index.php/welcome/telegram', {
                params: {
                    tipo,
                    device: navigator.userAgent
                }
            })
        });

    }
    return (
        <div style={{textAlign: 'center'}}>
            <button type="button" onClick={() => goTo('/')}>English</button><br></br>
            <button type="button" onClick={() => goTo('/spanish')}>Spanish</button><br></br>
            <button type="button" onClick={() => downloadPDF('english')}><i class="fa fa-file-pdf" aria-hidden="true" /> PDF English</button><br></br>
            <button type="button" onClick={() => downloadPDF('spanish')}><i class="fa fa-file-pdf" aria-hidden="true" /> PDF Spanish</button>
            </div>
    )
}
export default Complements;