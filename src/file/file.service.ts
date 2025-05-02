import {
    BadRequestException,
    Injectable,
    NotFoundException,
    StreamableFile,
} from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { promisify } from 'util';
import { FileType } from './file-type';
  
const stat = promisify(fs.stat);

@Injectable()
export class FileService {
  async findOne(id: string, res: Response): Promise<StreamableFile> {
    if (!id || id === '-') {
      throw new BadRequestException('Invalid file identifier');
    }

    const path = `./uploads/${id}`;
    try {
      await stat(path);
    } catch {
      throw new NotFoundException('File not found');
    }

    const file = fs.createReadStream(path);
    const mime = await FileType.fromStream(fs.createReadStream(path));
    res.set({ 'Content-Type': mime?.mime ?? 'application/octet-stream' });

    return new StreamableFile(file);
  }
}
