import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength
} from 'class-validator';
import Role from '../../../domain/models/enums/role.enum';
import { FormationMode } from '../../../domain/models/enums/formationMode.enum';

export class AuthPasswordDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Password can not be empty' })
  @IsString()
  @Matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})(?!.*(.)\1{2,})/,
    { message: 'password too weak' },
  )
  readonly password: string;
}

export class AuthSignUpDto extends AuthPasswordDto {
  @IsNotEmpty({ message: 'User name can not be empty' })
  @IsEmail()
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'First name can not be empty' })
  @MaxLength(50, { message: 'First name too long' })
  @IsString()
  readonly firstname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Last name can not be empty' })
  @MaxLength(50, { message: 'Last name too long' })
  @IsString()
  readonly lastname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Birth date can not be empty' })
  @IsDateString()
  readonly birthDate: Date;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50, { message: 'Birth place too long' })
  @IsNotEmpty({ message: 'Birth place can not be empty' })
  readonly birthPlace: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Role can not be empty' })
  readonly role: Role;

  @ApiProperty({ required: false })
  readonly formationMode?: FormationMode;
}
