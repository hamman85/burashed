import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../../Services/Angly.service';

@Component({
   selector: 'app-home',
   templateUrl: './Home.component.html',
   styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

   public homeData: any;

   // home slider config
   slideConfig = {
      "slidesToShow": 1, "slidesToScroll": 1, "rtl": true, "autoplay": false, "arrows": false, "dots": true, "infinite": true, "autoplaySpeed": 3000,
      "responsive": [
         {
            "breakpoint": 768,
            "settings": {
               "dots": false,
               "arrows": false,
            }
         }
      ]
   };

   constructor(private anglyService: AnglyService) { }

   ngOnInit() {
      this.gethomeSlider();
   }

   //gethomeSlider method is used to get homeSlider data from service
   gethomeSlider() {
      this.anglyService.getHomeSlider()
         .subscribe(response => { this.homeData = response },
            err => console.log(err),
            () => this.homeData
         )
   }
}
