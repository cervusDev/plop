import { Injectable } from '@nestjs/common';
import { Calculo } from 'domain/calculo/entities/calculo.entity';
import { ICalculoRepository } from 'domain/calculo/repository/calculo.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CalculoPrismaRepository implements ICalculoRepository {
  constructor(private readonly prisma: PrismaService) {}
}
