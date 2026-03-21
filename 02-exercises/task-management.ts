type User = {
  id: number;
  name: string;
};

type TaskStatus = "To Do" | "In Progress" | "Completed";

type Task = {
  id: number;
  title: string;
  dueDate?: string;
  assignedTo?: number;
  status: TaskStatus;
};

function createNewUser(user: User): User {
  const newUser: User = user;
  return newUser;
}

function createNewTask(task: Task): Task {
  const newTask: Task = task;
  return newTask;
}

function getTaskByUserId(task: Task[], userId: number): Task | undefined {
  for (const t of task) {
    if (t.assignedTo === userId) {
      return t;
    }
  }
  return undefined;
}

function getTaskSummary(task: Task[], userId: number): string | undefined {
  for (const t of task) {
    if (t.assignedTo === userId) {
      return `Task: ${t.title}, Status: ${t.status}`;
    }
  }
  return undefined;
}

const users: User[] = [];
const tasks: Task[] = [];

users.push(createNewUser({ id: 1, name: "Vita" }));
users.push(createNewUser({ id: 2, name: "Becca" }));

tasks.push(
  createNewTask({
    id: 0,
    title: "Clean Kitchen",
    status: "To Do",
    assignedTo: 1,
    dueDate: "Tomorrow",
  }),
);

tasks.push(
  createNewTask({
    id: 1,
    title: "Do Laundry",
    status: "In Progress",
    assignedTo: 2,
  }),
);

const taskByUserId: Task | undefined = getTaskByUserId(tasks, 1);
console.log(taskByUserId);

const taskSummary: string | undefined =
  `Assigned To: ${users[0].name}, ${getTaskSummary(tasks, 0)}`;
console.log(taskSummary);
