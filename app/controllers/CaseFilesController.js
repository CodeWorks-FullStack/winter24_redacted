import { AppState } from "../AppState.js";
import { caseFilesService } from "../services/CaseFilesService.js";
import { setHTML } from "../utils/Writer.js";

function _drawCaseFiles() {
  // console.log('drawing case files');

  const caseFiles = AppState.caseFiles

  let htmlString = ''

  caseFiles.forEach(caseFile => htmlString += caseFile.ListHTMLTemplate)

  setHTML('caseFilesList', htmlString)
}

function _drawActiveCaseFile() {
  const caseFile = AppState.activeCaseFile
  console.log('drawing active case file', caseFile);

  setHTML('caseFileDetails', caseFile.ActiveDetailsHTMLTemplate)
}

export class CaseFilesController {
  constructor () {
    // console.log('Case Files Controller loaded');
    _drawCaseFiles()
    AppState.on('activeCaseFile', _drawActiveCaseFile)
  }

  setActiveCaseFile(caseFileId) {
    // console.log('setting active case file, here is the id', caseFileId);
    caseFilesService.setActiveCaseFile(caseFileId)
  }

}
