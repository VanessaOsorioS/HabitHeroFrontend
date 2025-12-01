export interface Avatar {
  id: number;
  userId: number;

  hatId?: number | null;
  shirtId?: number | null;
  pantsId?: number | null;
  shoesId?: number | null;
}

export interface GetAvatarResponse {
  data: Avatar;
}

export interface UpdateAvatarRequest {
  hatId?: number | null;
  shirtId?: number | null;
  pantsId?: number | null;
  shoesId?: number | null;
}

export interface UpdateAvatarResponse {
  message: string;
  data: Avatar;
}

export interface InitAvatarResponse {
  message: string;
  data: Avatar;
}
