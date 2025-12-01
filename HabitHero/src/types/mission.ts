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
  creationDate: string;
  userId: number;

  statusHistories: {
    id: number;
    missionId: number;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    date: string;
  }[];
}


export enum MissionType {
  STUDY = "STUDY",
  TASK = "TASK",
}

enum MissionStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

