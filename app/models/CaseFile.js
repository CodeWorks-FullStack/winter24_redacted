import { generateId } from "../utils/GenerateId.js"

export class CaseFile {
  constructor (data) {
    this.id = generateId()
    this.title = data.title
    this.agency = data.agency || 'Park Ranger'
    // if (data.body == undefined) {
    //   this.body = 'no body here'
    // }
    // else {
    //   this.body = data.body
    // }
    // NOTE default to right side of pipes (||) if data.body is falsy (undefined)
    this.body = data.body || ''
    this.imgUrl = data.imgUrl
    this.lastAccessed = new Date()
    this.isLocked = true
  }



  get ListHTMLTemplate() {
    return `
    <p onclick="app.CaseFilesController.setActiveCaseFile('${this.id}')" class="fs-2 selectable px-5 d-flex justify-content-between" role="button">
      <span>
        <b>${this.title}</b>
        <span class="mx-3">-</span>
        <i>${this.agency}</i>
      </span>
      <span>${this.LastAccessedDate}</span>
    </p>
    `
  }

  get ActiveDetailsHTMLTemplate() {
    return `
    <div class="col-12">
      <div class="p-5">
        <div class="d-flex">
          <h2 class="me-4">${this.title}</h2>
          ${this.ImgUrlLink}
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
          <h3 class="mb-0">Last Accessed ${this.LastAccessedDate} at ${this.LastAccessedTime}</h3>
          <button onclick="app.CaseFilesController.unlockCaseFile()">Unlock Case</button>
        </div>
        ${this.ReportBody}
      </div>
    </div>
    `
  }

  get LastAccessedDate() {
    return this.lastAccessed.toLocaleDateString()
  }

  get LastAccessedTime() {
    return this.lastAccessed.toLocaleTimeString()
  }

  get ImgUrlLink() {
    // NOTE checking to see if imgUrl is undefined on the class
    if (!this.imgUrl) { //this.imgUrl == undefined
      return ''
    }

    // else
    return `
    <a href="${this.imgUrl}" target="_blank">
      <i class="mdi mdi-camera fs-2"></i>
    </a>
    `
  }

  get ReportBody() {
    if (this.isLocked) {
      return `
      <p class="fs-5">
        ${this.body}
      </p>
      `
    }

    // else
    return `
      <textarea onblur="app.CaseFilesController.updateCaseFile()" name="body" id="caseFileTextArea" rows="12" class="w-100">${this.body}</textarea>
    `
  }

}