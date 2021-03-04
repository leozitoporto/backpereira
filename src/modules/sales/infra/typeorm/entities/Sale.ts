import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';

@Entity('sales')
class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('numeric')
  price: number;

  @Column()
  obs: string;

  @Column('timestamp')
  dt_valid: Date;

  @Column()
  avatar: string;

  @Column()
  tp_sale: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    return this.avatar ? `${process.env.APP_API_URL}/files/${this.avatar}` : null;
  }

}
export default Sales;
