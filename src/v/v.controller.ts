import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { VService } from './v.service';
import { CreateVDto } from './dto/create-v.dto';
import { UpdateVDto } from './dto/update-v.dto';

@Controller('v')
export class VController {
  constructor(private readonly vService: VService) {}

  @Post()
  create(@Body() createVDto: CreateVDto) {
    return this.vService.create(createVDto);
  }

  @Get()
  findAll() {
    return this.vService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {

    const V = this.vService.findOne(id);

    if(!V) {
      throw new NotFoundException("User doesn't exist");
    }

    return V;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVDto: UpdateVDto) {
    return this.vService.update(id, updateVDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vService.remove(id);
  }
}
