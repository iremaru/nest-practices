import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB = () => {
    const entities = [];
    return `Database populated with ${entities.length} entities`;
  };
}
