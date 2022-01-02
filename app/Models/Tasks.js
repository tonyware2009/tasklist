import { generateId } from "../Utils/generateId.js"


export class task {
  constructor(data) {
    this.name = data.name
    this.id = generateId()
    this.task = data.task
  }
}