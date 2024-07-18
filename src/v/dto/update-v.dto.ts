import { PartialType } from '@nestjs/mapped-types';
import { CreateVDto } from './create-v.dto';

export class UpdateVDto extends PartialType(CreateVDto) {
    
}
