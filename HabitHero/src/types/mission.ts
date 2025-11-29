export interface Mission {
  id: number;
  title: string;
  description?: string;
  type: MissionType;
  dueDate?: string;         
  durationMinutes?: number;
  category?: string;
  priority: number;
  difficulty: number;
  daily: boolean;
  reminderEnabled: boolean;
  status: MissionStatus;
  creationDate: string;
}

export enum MissionType {
  STUDY = "STUDY",
  TASK = "TASK",
}

enum MissionStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

