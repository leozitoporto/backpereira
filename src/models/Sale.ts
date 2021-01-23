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
  dtvalid: Date;

  @Column()
  urlimg: string;

  @Column()
  tpsale: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Sales;
