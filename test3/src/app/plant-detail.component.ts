import { Component, OnInit, Input } from '@angular/core';

import { Location } from "@angular/common";
import { Plant } from "./plant";

import { PlantListService } from "./plant-list.service";
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: '<plant-detail>',
    templateUrl: 'plant-detail.component.html'
})
export class PlantDetailComponent implements OnInit {
    //@Input() plant:Plant;
    plant:Plant;
    sub: any;
    urlId:number;

    constructor(
       private plantListService:PlantListService,
        private route:ActivatedRoute,
        private location:Location
    ){}
    ngOnInit(): void{ 
        this.sub=this.route.params.subscribe(params => {
            this.urlId=+params['id']
        });
        this.route.params
        .switchMap((params:Params) => this.plantListService.getPlant(+params['id']))
        .subscribe(plant => this.plant = plant);
    }

    goBack(): void{
        this.location.back();   
    }

}