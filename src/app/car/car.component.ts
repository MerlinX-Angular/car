import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
id;
selectedCar;
fullCar;

  constructor(private route:ActivatedRoute,private info:InformationService) {
      route.paramMap.subscribe(params => { this.id = params.get('id') });
      this.info.getCarsById(this.id).subscribe(selectedCar => {this.selectedCar = selectedCar})
     }

  ngOnInit() {
  }

  updateCar(brand,model,price,desc){
    this.fullCar = {
      "id":this.id,
      "brand":brand,
      "model":model,
      "price":+price,
      "shortDescription":desc
  }
  this.info.editCars(this.fullCar.id,this.fullCar).subscribe()
}


}
