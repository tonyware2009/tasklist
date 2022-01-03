class TaskService {
  constructor() {
    console.log("service active")
  }
};

createTask()
{
  console.log(" creating taskservice")

}

const service = new TaskService();
export default service;