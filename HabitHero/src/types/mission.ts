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
  status: string;
  creationDate: string;
}

export enum MissionType {
  STUDY = "STUDY",
  TASK = "TASK",
}

