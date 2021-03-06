export interface RouteConfig {
  method: string;
  route: string;
  action: string;
  controller: any;
  middleware?: any;
}

export interface SocketConfig {
  event: string;
  controller: any;
  action: string;
}

export interface AuthTokenUser {
  userId: number;
  username: string;
  iat: number;
  exp: number;
}
