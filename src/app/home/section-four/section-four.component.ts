import { Component, OnInit, Input } from '@angular/core';
import { AnglyService } from 'src/app/Services/Angly.service';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit {


  constructor(private anglyService: AnglyService) { }


  ngOnInit() {

  }

  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1, "autoplay": false, "arrows": true,"rtl": true, "dots": true, "infinite": true, "autoplaySpeed": 5000,
    "responsive": [
      {
        "breakpoint": 1200,
        "settings": {
          "arrows": true,
        }
      },
      {
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "arrows": true,
        }
      }
    ]
  };


}
