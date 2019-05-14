import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZoomserviceService {
  

  constructor( public  http: HttpClient) { }

  getEasternBaganaloreOffers(){
    console.log("called service");
    
    return this.http.get('https://www.zoomcar.com/deals/filtered_active_deals?platform=web&api_version=v3&city=bangalore&zone=4');
  }
}
