import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly username: string;
  readonly displayName: string;
  readonly avatar: string;
  readonly role: string;
  readonly isActive: boolean;
  readonly verifyToken: string;
  readonly isAc_destroytive: boolean;
}
