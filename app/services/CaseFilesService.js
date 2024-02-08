import { AppState } from "../AppState.js"
import { CaseFile } from "../models/CaseFile.js"
import { loadState, saveState } from "../utils/Store.js"

function _saveCaseFiles() {
  saveState('caseFiles', AppState.caseFiles)
}

function _loadCaseFiles() {
  const caseFilesFromLocalStorage = loadState('caseFiles', [CaseFile])
  AppState.caseFiles = caseFilesFromLocalStorage
}

class CaseFilesService {

  constructor () {
    _loadCaseFiles()
  }

  setActiveCaseFile(caseFileId) {
    const foundCase = AppState.caseFiles.find(caseFile => caseFile.id == caseFileId)

    // console.log('found case file', foundCase);

    AppState.activeCaseFile = foundCase

    // console.log('case file in appstate', AppState.activeCaseFile);
  }

  unlockCaseFile() {
    const caseFile = AppState.activeCaseFile
    // TODO flip bool
    caseFile.isLocked = false
    console.log('case file', caseFile);

    // AppState.activeCaseFile = AppState.activeCaseFile
    // NOTE manually trigger a listener
    AppState.emit('activeCaseFile')
  }

  updateCaseFile(updatedCaseFileBody) {
    const activeCaseFile = AppState.activeCaseFile

    activeCaseFile.body = updatedCaseFileBody
    activeCaseFile.lastAccessed = new Date()
    activeCaseFile.isLocked = true

    _saveCaseFiles()
    AppState.emit('activeCaseFile')
  }


}

export const caseFilesService = new CaseFilesService()