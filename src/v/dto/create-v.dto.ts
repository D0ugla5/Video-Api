
import { IsString, MinLength} from 'class-validator';

export class CreateVDto {
    @IsString()
    name: string;

    @IsString()
    @MinLength(2)
    year: string;
}
