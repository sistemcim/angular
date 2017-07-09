import { Component } from '@angular/core';
import { PlantsShowComponent } from "./plants-show.component";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private location:Location
  ){}
  title = 'Plants App';
  showPlant: boolean;
  showInfo: boolean;
  
  showPlantDiv(): void{
    this.showPlant=true;
    this.showInfo=undefined;
  }
  showInfoDiv(): void{
    this.showInfo=true;
    this.showPlant=undefined;
  }
  goHomePage(): void{
    this.location.go("/") ;
    location.reload();
  }
}
