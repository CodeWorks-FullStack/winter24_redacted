import { AppState } from "../AppState.js";
import { caseFilesService } from "../services/CaseFilesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
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

    AppState.on('caseFiles', _drawCaseFiles)
    AppState.on('activeCaseFile', _drawActiveCaseFile)
  }

  setActiveCaseFile(caseFileId) {
    // console.log('setting active case file, here is the id', caseFileId);
    caseFilesService.setActiveCaseFile(caseFileId)
  }

  unlockCaseFile() {
    caseFilesService.unlockCaseFile()
  }


  updateCaseFile() {
    console.log('blurred input');

    const textAreaElement = document.getElementById('caseFileTextArea')

    // @ts-ignore
    console.log('text content from textarea', textAreaElement.value);

    // @ts-ignore
    const updatedCaseFileBody = textAreaElement.value

    caseFilesService.updateCaseFile(updatedCaseFileBody)

  }

  createReport() {
    try {
      event.preventDefault()

      const form = event.target

      console.log(form);

      const caseFileFormData = getFormData(form)

      console.log(caseFileFormData);

      caseFilesService.createCaseFile(caseFileFormData)

    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}
