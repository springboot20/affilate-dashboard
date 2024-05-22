export interface UserInterface {
  _id: string;
  username: string;
  email: string;
  isAdmin?: boolean;
  avatar?: {
    url: string;
    localPath: string;
  };
}
