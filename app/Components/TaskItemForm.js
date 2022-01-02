export function taskItemForm() {
  return /*html*/ `
  <form onsubmit="app.taskController.createTaskItem()">
    <div class="form-group">
      <input type="text" name="taskName" class="form-control" placeholder="Name..." minlength="4"
        maxlength="50" required>
    </div>
    <div class="form-group mt-2">
      <input type="text" name="type" class="form-control" placeholder="Type..." required minlength="4"
        maxlength="50">
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button class="btn btn-success">Add Task</button>
    </div>
  </form>
  `
}