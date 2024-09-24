export interface User {
  id?: number;
  userName: string;
  password: string;
}

export interface UserDBResponse {
  token: string;
  user: User;
}
