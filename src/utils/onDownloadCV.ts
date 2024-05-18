import { saveAs } from "file-saver";

export const onDownloadCV = () => {
  const URL = "/documents/cv.pdf";
  saveAs(URL, "Franco Piccoli CV");
};
