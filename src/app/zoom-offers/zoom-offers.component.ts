import { Component, OnInit } from '@angular/core';
import {ZoomserviceService} from '../zoomservice.service';

@Component({
  selector: 'app-zoom-offers',
  templateUrl: './zoom-offers.component.html',
  styleUrls: ['./zoom-offers.component.scss']
})
export class ZoomOffersComponent implements OnInit {
  value: any;

  constructor(public zoomService:ZoomserviceService) { }

  ngOnInit() {
    this.zoomService.getEasternBaganaloreOffers().subscribe(result => {
      this.value = result;
      console.log(result);
    })
    
    
  }

}
