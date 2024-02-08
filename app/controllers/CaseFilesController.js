import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawCaseFiles() {
  console.log('drawing case files');

  const caseFiles = AppState.caseFiles

  let htmlString = ''

  caseFiles.forEach(caseFile => htmlString += caseFile.ListHTMLTemplate)

  setHTML('caseFilesList', htmlString)
}

export class CaseFilesController {
  constructor () {
    console.log('Case Files Controller loaded');
    _drawCaseFiles()
  }
}