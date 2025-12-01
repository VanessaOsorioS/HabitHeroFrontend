import { User } from "@/src/types/auth";

export type PropsLogin = {
  onLogin: (token: string, user: User) => void;
};