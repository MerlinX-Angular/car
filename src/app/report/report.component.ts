import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
link;
infox;
carValues = 0;
maxAll = 0;
  constructor(private info:InformationService) { }

  ngOnInit() {
    this.info.getCars().subscribe(link=>{this.link = link;
      this.calculate()

    })

  }
calculate(){
  for(let cc of this.link){
    this.carValues += cc.price;
    this.maxAll = Math.max(cc.id)
  }

}

getCarff(){
  return this.info.getCars();
}

}
