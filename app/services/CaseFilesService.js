import { AppState } from "../AppState.js"

class CaseFilesService {

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
    console.log('case file bool', caseFile.isLocked);
  }

}

export const caseFilesService = new CaseFilesService()