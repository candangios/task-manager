import { Controller, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Post()
  // create(@Body() userData: CreateUserDto) {
  //   const a = CreateUserSchema.validate(userData)
  //   console.log(a)
  //   return this.userService.create(userData);
  // }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.userService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
