import { BaseEntity } from '../../shared/classes/base-entity.class';
import { UserTypeEnum } from '@src/shared/enums/user-type.enum';
import { IUser } from '../../shared/interfaces/user.interface';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUser {
  id: string;
  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  tel: string;

  @Column({ default: '' })
  email: string;

  @Column('enum', { enum: UserTypeEnum })
  type: UserTypeEnum;
}
