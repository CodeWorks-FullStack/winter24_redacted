import { generateId } from "../utils/GenerateId.js"

export class CaseFile {
  constructor (data) {
    this.id = generateId()
    this.title = data.title
    this.agency = data.agency
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.lastAccessed = new Date()
    this.isLocked = true
  }



  get ListHTMLTemplate() {
    return `
    <p class="fs-2 selectable px-5 d-flex justify-content-between" role="button">
      <span>
        <b>${this.title}</b>
        <span class="mx-3">-</span>
        <i>${this.agency}</i>
      </span>
      <span>${this.LastAccessedDate}</span>
    </p>
    `
  }

  get LastAccessedDate() {
    return this.lastAccessed.toLocaleDateString()
  }
}