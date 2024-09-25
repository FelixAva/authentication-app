export interface User {
  id?: number;
  username: string;
  password: string;
}

export interface UserDBResponse {
  token: string;
  user: User;
}
