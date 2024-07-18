import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @Field(() => ID, {description:"User id"})
  @PrimaryGeneratedColumn()
  id:number

  @Field(() => String, {description:"User name"})
  @Column()
  title: string

  @Field(() => String, {description:"User surname"})
  @Column()
  body: string


  @Field(type => User)
  @ManyToOne(type => User,user => user.posts,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User
}
