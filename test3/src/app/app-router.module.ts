import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { PlantDetailComponent } from "./plant-detail.component";
import { PlantsShowComponent } from "./plants-show.component";
import { emptyComponent } from "./empty.component";

const routes:Routes=[
    {
        path:"", 
        redirectTo:"plants",
        pathMatch: "full"
    },{
        path:"plants",
        component: emptyComponent
    },{
        path:"detail/:id",
        component: PlantDetailComponent
    },{
        path: '**', 
        redirectTo:"plants",
        pathMatch: "full"
    }    
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRouterModule { }