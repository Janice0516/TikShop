import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: '手机号', example: '13800138000' })
  @IsString({ message: '手机号必须是字符串' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @Matches(/^1[3-9]\d{9}$/, { message: '手机号格式不正确' })
  phone: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 20, { message: '密码长度为6-20个字符' })
  password: string;

  @ApiProperty({ description: '验证码', example: '123456' })
  @IsString({ message: '验证码必须是字符串' })
  @IsNotEmpty({ message: '验证码不能为空' })
  @Length(6, 6, { message: '验证码长度为6位' })
  code: string;
}

