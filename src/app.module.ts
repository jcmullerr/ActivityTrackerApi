import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ActivitiesModule } from './activities/activities.module';
import { EventsModule } from './events/events.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    ActivitiesModule,
    EventsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_DB_CONNECTION_STRING'),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
