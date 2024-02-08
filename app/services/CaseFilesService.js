import { AppState } from "../AppState.js"

class CaseFilesService {
  setActiveCaseFile(caseFileId) {
    const foundCase = AppState.caseFiles.find(caseFile => caseFile.id == caseFileId)

    console.log('found case file', foundCase);

    AppState.activeCaseFile = foundCase

    console.log('case file in appstate', AppState.activeCaseFile);
  }

}

export const caseFilesService = new CaseFilesService()