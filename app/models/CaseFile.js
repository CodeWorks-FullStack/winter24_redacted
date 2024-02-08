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
}