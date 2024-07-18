import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userRepository.save({ ...createUserInput });
  }

  findAll() {
    return this.userRepository.find({
      relations:{
        posts:{
          user:true
        }
      }
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) return { message: 'User not foud' };
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) return { message: 'User not foud' };
    await this.userRepository.update(id, updateUserInput);
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) return { message: 'User not foud' };
    await this.userRepository.delete(id)
    return user;
  }
}
