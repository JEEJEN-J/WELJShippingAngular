import {Component , OnInit} from '@angular/core';
import data from "../../../data/whyus.json";

@Component({
  selector: 'app-about-us' ,
  templateUrl: './about-us.component.html' ,
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  name = 'Jeejen Joseph';
  number = '7465 7374 6374 9474';
  expiry = '1222';
  cvc = '415';

  public whyus = data;

  constructor() {
  }

  ngOnInit(): void {
  }

}
