import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVDto } from './dto/create-v.dto';
import { UpdateVDto } from './dto/update-v.dto';
import { privateDecrypt } from 'crypto';
import { V } from './entities/v.entity';

@Injectable()
export class VService {
    private v: V[] = [];
    
    create(createVDto: CreateVDto){
      const currentMaxId = this.v[this.v.length - 1]?.id || 0;
      
      const id = currentMaxId + 1;

      const V = {
      id,
      ...createVDto,
      };

      this.v.push(V);
      return V; 
  }

  findAll() {
    return this.v;
  }

  findOne(id: number) {

    const index = this.v.findIndex((V) => V.id === id);

    return this.v[index];
  }

  update(id: number, updateVDto: UpdateVDto) {

    const V = this.findOne(id);
    
    const newV = {
      ...V,
      ...updateVDto,
    }

    const index = this.v.findIndex((V) => V.id === id);

      this.v[index] = newV;
      return newV;

  }

  remove(id: number) {

    const index = this.v.findIndex((V) => V.id === id);
    if(index === -1){
      throw new NotFoundException(`User with id ${id} not found!`)
    }

    this.v.splice(index, 1);

    return `Deletado`;
  }
}

                                          /* 1 - GET VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo GET, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE GET REQUEST"}
                          
                          2 - POST VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo POST, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE POST REQUEST"}
                          
                          3 - PATCH VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo PATCH, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE PATCH REQUEST"}
                          
                          
                          4 - DELETE VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo DELETE, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE DELETE REQUEST"}
                          
                          OBSERVAÇÕES IMPORTANTES:
                          - O CRUD deverá conter ao menos um módulo (ex.: vehicle)
                          - O CRUD deverá conter ao menos um service;
                          - O CRUD deverá conter ao menos um controller; */
 