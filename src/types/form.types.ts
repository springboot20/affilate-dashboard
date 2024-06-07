export enum FormPage {
  ADDPRODUCT = 'ADDPRODUCT',
  UPLOADIMAGES = 'UPLOADIMAGES',
}

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}

export interface ProfileFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export interface LoginFormValues {
  username_or_email: string;
  password: string;
}
