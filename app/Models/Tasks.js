import { generateId } from "../Utils/generateId.js"


export class task {
  constructor(data) {
    this.title = data.title
    this.tasks = data.tasks || []
    this.id = data.id || generateId()
  }
}