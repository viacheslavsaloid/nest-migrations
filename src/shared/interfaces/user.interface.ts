import { UserTypeEnum } from '../enums/user-type.enum';

export interface IUser {
  id: string;
  name: string;
  tel: string;
  email: string;
  type: UserTypeEnum;
}
