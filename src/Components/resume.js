import Resume from '../images/Updated_resume.pdf'
import { saveAs } from 'file-saver';
const downloadFile = () => {
    window.open("https://drive.google.com/file/d/1OLxTThKBDvk85P1UsMgej-E8EQRAfm-E/view?usp=sharing", "_blank")
    const filename = 'Tejas_yelve_resume.pdf'; // the name of the file you want to download
    const file = Resume; // the path to the file you want to download
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, filename);
      })
      .catch((error) => console.error(error));
  };


  export {downloadFile}