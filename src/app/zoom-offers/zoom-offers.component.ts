import { Component, OnInit } from '@angular/core';
import {ZoomserviceService} from '../zoomservice.service';

@Component({
  selector: 'app-zoom-offers',
  templateUrl: './zoom-offers.component.html',
  styleUrls: ['./zoom-offers.component.scss']
})
export class ZoomOffersComponent implements OnInit {
  value: any;
  discount = [
    60,50, 40, 30
  ]
  discountPercentage: any;
  constructor(public zoomService:ZoomserviceService) { }

  ngOnInit() {
    this.getZoomcarData();
    this.refreshZoomcar();
    
  }
  refreshZoomcar(){
    setInterval(() => {
      this.getZoomcarData();
      console.log("Refreshed");
      
        }, 60000);
  }
  getZoomcarData(){
    this.zoomService.getEasternBaganaloreOffers().subscribe(result => {
      this.value = result;
      console.log(result);
    })
  }
  radioChangeHandeler(event){
    this.discountPercentage = event.target.value;
    console.log(event);
    console.log(this.discountPercentage);
    this.getZoomcarData();
    
    
  }

}
