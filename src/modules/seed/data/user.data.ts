import { User } from '../../user/entities/user.entity';
import { v4 as uuid } from 'uuid';
export const users: User[] = [
  {
    userId: uuid(),
    userName: 'Idaira',
  },
  {
    userId: uuid(),
    userName: 'Inu',
  },
  {
    userId: uuid(),
    userName: 'Shiropopi',
  },
];
