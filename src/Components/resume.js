import Resume from '../images/Updated_resume.pdf'
import { saveAs } from 'file-saver';
const downloadFile = () => {
    window.open("https://drive.google.com/file/d/1noMoLjBSmg7d3L33B8DdFeSfn-fJmzoL/view?usp=drive_link", "_blank")
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