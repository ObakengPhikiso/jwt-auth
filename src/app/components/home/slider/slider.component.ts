import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  section: any;

  constructor() { }

  ngOnInit(): void {
    this.section = "slider"
  }

}
