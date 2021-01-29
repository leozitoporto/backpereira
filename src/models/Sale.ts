import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

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
}
export default Sales;
