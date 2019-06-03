import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { Car } from '../car.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars;
  fullCar:Car;
  darkMode = false;
  colorMode = {
    "backgroundDark": this.darkMode,
    "backgroundWhite": !this.darkMode,
  }
  constructor(private info:InformationService) {
  }

  ngOnInit() {
    this.cars = this.info.getCars();

  }

postNew(brand,model,price,desc){

   this.fullCar = {
     "id":17,
     "brand":brand,
     "model":model,
     "price":+price,
     "shortDescription":desc
   }
   this.info.postCars(this.fullCar).subscribe()

}

deleteC(id){
  this.info.deleteCars(id).subscribe()
}

slider(){

  this.darkMode = !this.darkMode
    console.log(this.darkMode)
}

changeMode(){
    return {
      "backgroundDark":this.darkMode === true,
      "backgroundWhite":this.darkMode === false
    }
}
}
