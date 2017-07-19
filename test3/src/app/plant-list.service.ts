import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plant } from "./plant";
import { PLANT } from "./plant-list.component";

@Injectable()
export class PlantListService {
    
    private plantsUrl = 'api/plants';  // URL to web api
    constructor(private http: Http){

    }
    getPlants(): Promise<Plant[]> {
          return this.http.get(this.plantsUrl)
             .toPromise()
             .then(response => response.json().data as Plant[])
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getPlant(id: number): Promise<Plant> {

    const url = `${this.plantsUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Plant)
        .catch(this.handleError);
        
//    return this.getPlants()
//             .then(plants => plants.find(plant => plant.id === id));
}
}