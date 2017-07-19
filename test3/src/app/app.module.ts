import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    AppRouterModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
