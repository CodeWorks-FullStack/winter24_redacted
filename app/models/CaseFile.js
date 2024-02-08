import { generateId } from "../utils/GenerateId.js"

export class CaseFile {
  constructor (data) {
    this.id = generateId()
    console.log('length of id', this.id.length);
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.lastAccessed = new Date()
    this.isLocked = true
  }
}