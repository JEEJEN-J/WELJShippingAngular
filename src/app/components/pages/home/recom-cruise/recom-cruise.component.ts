import { Component } from '@angular/core';
import { CruiseHelperService } from 'src/app/components/helper/cruise/cruise-helper.service';

@Component({
  selector: 'app-recom-cruise',
  templateUrl: './recom-cruise.component.html',
  styleUrls: ['./recom-cruise.component.css']
})
export class RecomCruiseComponent extends CruiseHelperService {
  settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }]
  };
}
