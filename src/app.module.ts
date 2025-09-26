import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [CatsModule, TodoModule],
})
export class AppModule {}
