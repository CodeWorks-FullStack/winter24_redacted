import { AppState } from "../AppState.js"

class CaseFilesService {
  setActiveCaseFile(caseFileId) {
    const foundCase = AppState.caseFiles.find(caseFile => caseFile.id == caseFileId)

    console.log('found case file', foundCase);
  }

}

export const caseFilesService = new CaseFilesService()