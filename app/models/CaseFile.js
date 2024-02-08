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
    <p onclick="app.CaseFilesController.setActiveCaseFile()" class="fs-2 selectable px-5 d-flex justify-content-between" role="button">
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
          <h2 class="me-4">Nessie</h2>
          <a href="https://fonts.google.com/specimen/IBM+Plex+Sans" target="_blank">
            <i class="mdi mdi-camera fs-2"></i>
          </a>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-centerr\">
          <h3 class="mb-0">Last Accessed 12/12/2012 at 11:54 AM</h3>
          <button>Unlock Case</button>
        </div>
        <p class="fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos in, voluptas perspiciatis
          omnis, dolore quia
          distinctio ipsam excepturi ipsa consequuntur animi est nemo minima rem, voluptatum necessitatibus libero
          quibusdam! Culpa modi quis autem ratione aut, blanditiis ipsam quibusdam quaerat ea voluptate quia, incidunt
          earum ipsa molestias veritatis, odit adipisci.
        </p>
      </div>
    </div>
    `
  }

  get LastAccessedDate() {
    return this.lastAccessed.toLocaleDateString()
  }
}