import { ObjectType, Field, Int , ID} from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID, {description:"User id"})
  @PrimaryGeneratedColumn()
  id:number

  @Field(() => String, {description:"User name"})
  @Column()
  name: string

  @Field(() => String, {description:"User surname"})
  @Column()
  surname: string

  @Field(() => String, {description:"User email"})
  @Column()
  email: string

  @Field(() => Int, {description:"User age"})
  @Column()
  age: number

  @Field(type => [Post])
  @OneToMany(tyoe => Post,posts => posts.user,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  posts: Post[]
}
