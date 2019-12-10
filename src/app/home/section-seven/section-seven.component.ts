import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-seven',
  templateUrl: './section-seven.component.html',
  styleUrls: ['./section-seven.component.scss']
})
export class SectionSevenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public slideConfig: any = {
    dots: false,
    infinite: true,
    autoplay: true, 
    speed: 300,
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 1367,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  };

}
