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
  statusHistories: MissionStatusHistory[];
  creationDate: string;
}

export interface MissionStatusHistory {
  id: number
  mission: Mission
  missionId: number
  status: MissionState
  date: Date
}

export enum MissionType {
  STUDY = "STUDY",
  TASK = "TASK",
}

export enum MissionState {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",  
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

