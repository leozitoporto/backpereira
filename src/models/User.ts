import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  tpuser: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
export default Users;
