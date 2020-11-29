import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn  } from 'typeorm';
import orphanage from './Orphanage';

@Entity('images')
export default class Image {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: orphanage;
} 