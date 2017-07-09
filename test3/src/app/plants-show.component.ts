import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Plant } from "./plant";
import { PlantListService } from "./plant-list.service";
import { PlantDetailComponent } from "./plant-detail.component";



@Component({
    moduleId: module.id,
    selector: '<plants-show>',
    templateUrl: 'plants-show.component.html',
    styleUrls: ['plants-show.component.css'],
    providers:[PlantListService]
})
export class PlantsShowComponent implements OnInit {

    plants:Plant[];
    
    selectedPlant:Plant;

    constructor(
        private PlantListService: PlantListService,
        private router:Router  
 
        ) { }

    ngOnInit() { 
        this.PlantListService.getPlants().then(plants => this.plants=plants);
    }

    plantSelected(plant: Plant): void{
        this.selectedPlant=plant;
        this.showDetails();
    }

    showDetails(): void{
        //this.router.navigate(["/detail",this.selectedPlant.id]);
        this.router.navigate(["/detail",this.selectedPlant.id]);
    }
    
}