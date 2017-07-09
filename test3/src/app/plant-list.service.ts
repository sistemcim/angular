import { Injectable } from '@angular/core';

import { Plant } from "./plant";
import { PLANT } from "./plant-list.component";

@Injectable()
export class PlantListService {
    
    getPlants(): Promise<Plant[]> {
        return Promise.resolve(PLANT);
    }

    getPlant(id: number): Promise<Plant> {
    return this.getPlants()
             .then(plants => plants.find(plant => plant.id === id));
}
}