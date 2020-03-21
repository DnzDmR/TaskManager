export default class Task {
  constructor(
    taskSummary,
    taskDescription,
    taskCreatorBy,
    taskTeamCode,
    taskAssignee,
    taskStatus,
    taskDueDate,
  ) {
    this.taskSummary = taskSummary;
    this.taskDescription = taskDescription;
    this.taskCreatorBy = taskCreatorBy;
    this.taskTeamCode = taskTeamCode;
    this.taskAssignee = taskAssignee;
    this.taskStatus = taskStatus;
    this.taskDueDate = taskDueDate;
  }
}
