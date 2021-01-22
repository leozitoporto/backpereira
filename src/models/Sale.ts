import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales')
class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('number')
  price: number;

  @Column()
  obs: string;

  @Column('timestamp')
  dtvalid: Date;

  @Column()
  urlimg: string;

  @Column()
  tpsale: string;
}
export default Sales;
