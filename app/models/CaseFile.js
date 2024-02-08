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
    <p class="fs-2 d-flex justify-content-around selectable px-5" role="button">
      <span>Nessie</span>
      <span>Coast Guard</span>
      <span>12/12/2020</span>
    </p>
    `
  }
}