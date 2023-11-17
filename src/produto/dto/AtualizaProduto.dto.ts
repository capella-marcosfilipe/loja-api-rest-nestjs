import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaProdutoDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da característica não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  @IsOptional()
  descricao: string;

  produto: ProdutoEntity;
}

export class ImagemProdutoDTO {
  id: string;

  @IsUrl(undefined, { message: 'URL para imagem inválida' })
  @IsOptional()
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  @IsOptional()
  descricao: string;

  produto: ProdutoEntity;
}

export class AtualizaProdutoDTO {
  id: string;

  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome da característica não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsPositive({ message: 'O valor precisa ser maior do que zero' })
  @IsOptional()
  valor: number;

  @IsNumber()
  @IsPositive({ message: 'O valor precisa ser maior do que zero' })
  @IsOptional()
  quantidade: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  @IsOptional()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDTO)
  @IsOptional()
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  @IsOptional()
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  categoria: string;

  produto: ProdutoEntity;
}
