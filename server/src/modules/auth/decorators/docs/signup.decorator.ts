import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateUserDto } from '../../../users/dtos/create-user.dto.js';

export const SignupDocs = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new user account',
      description:
        'Register a new user with a unique email address and password.',
    }),

    ApiBody({
      type: CreateUserDto,
      examples: {
        signup: {
          summary: 'Sample',
          value: {
            email: 'user@gmail.com',
            password: 'MySecurePassword123!',
          },
        },
      },
    }),

    ApiCreatedResponse({
      description: 'User account created successfully.',
    }),
    ApiBadRequestResponse({
      description: 'Invalid email address or password.',
    }),
    ApiConflictResponse({
      description: 'The email address is already registered.',
    }),
    ApiInternalServerErrorResponse({
      description: 'An unexpected error occurred while creating the account.',
    }),
  );
};
