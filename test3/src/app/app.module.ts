import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlantsShowComponent } from "./plants-show.component";
import { PlantDetailComponent } from "./plant-detail.component";
import { AppRouterModule } from "./app-router.module";
import { emptyComponent } from "./empty.component";

@NgModule({
  declarations: [
    AppComponent,
    PlantsShowComponent,
    PlantDetailComponent,   
    emptyComponent 
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
