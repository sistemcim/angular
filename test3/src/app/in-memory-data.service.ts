import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const plants =[
    {id:0,name:"Genel",picture:"general.jpg"},
    {id:1,name:"domates",picture:"domates.jpg"},
    {id:2,name:"salatalık",picture:"salatalik.jpg"},
    {id:3,name:"biber",picture:"biber.jpg"},
    {id:4,name:"patlıcan",picture:"patlican.jpg"},
    {id:5,name:"kabak",picture:"kabak.jpg"},
    {id:6,name:"havuç",picture:"havuc.jpg"},
    {id:7,name:"marul",picture:"marul.jpg"}
]
 return {plants};
  }
}