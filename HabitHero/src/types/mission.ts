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

  statusHistories?: MissionStatusHistory[];
}

export interface MissionStatusHistory {
  id: number;
  missionId: number;
  status: MissionStatus;
  date: string;
}

export enum MissionType {
  STUDY = "STUDY",
  TASK = "TASK",
}

export enum MissionStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export interface GetMissionsResponse {
  data: Mission[];
}

export interface GetPendingMissionsResponse {
  data: Mission[];
}

export interface CreateMissionRequest {
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
  userId?: number;
}

export interface CreateMissionResponse {
  message: string;
  data: Mission;
}

export interface CompleteMissionResponse {
  xp: number;
  coins: number;
}
