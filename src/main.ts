import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;

    const config = new DocumentBuilder()
      .setTitle('Nest-One Project')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NestJs, Postgres, Sequelize')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Error starting server', error);
  }
};
bootstrap();
