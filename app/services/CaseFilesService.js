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
    // NOTE if you load from localstorage in the service's constructor, it will only load once
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

    // NOTE updates body
    activeCaseFile.body = updatedCaseFileBody
    // NOTE updates timestamp
    activeCaseFile.lastAccessed = new Date()
    // NOTE lock case again
    activeCaseFile.isLocked = true

    // NOTE if we changed values on our data, make sure to update localstorage
    _saveCaseFiles()
    // NOTE manually trigger a listener
    AppState.emit('activeCaseFile')
  }

  createCaseFile(caseFileFormData) {
    const newCaseFile = new CaseFile(caseFileFormData)

    console.log('new case file', newCaseFile);

    AppState.caseFiles.push(newCaseFile)

    _saveCaseFiles()
  }

}

export const caseFilesService = new CaseFilesService()