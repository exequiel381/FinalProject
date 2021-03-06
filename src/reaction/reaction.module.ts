import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionController } from './reaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reaction } from './entities/reaction.entity';
import { Post } from 'src/post/entities';
import { User } from 'src/user/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Reaction,Post,User])],
  providers: [ReactionService],
  controllers: [ReactionController]
})
export class ReactionModule {}
