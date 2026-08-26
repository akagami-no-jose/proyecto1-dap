export type UserRole = "ADMIN" | "USER";

export type ProjectStatus =
  | "PLANNED"
  | "IN_PROGRESS"
  | "COMPLETED";

export type TaskStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED";

export type TaskPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH";


export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}


export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  tasksCount: number;
  createdAt: string;
  ownerId: number;
}


export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: number;
  assignedToId: number | null;
  dueDate: string | null;
  createdAt: string;
}