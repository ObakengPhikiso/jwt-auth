import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.scss']
})
export class CaraouselComponent implements OnInit {


  selectedIndex = 0;
  indicators = true;
  controls = true;
  @Input() autoSlide = false;
  slideInterval= 5000; //Default to 5seconds
  images = [
    {
      img: 'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'img1'
    },
    {
      img: 'https://images.unsplash.com/photo-1663011109441-6948af4a0b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      alt: 'img2'
    },
    {
      img: 'https://images.unsplash.com/photo-1663050005289-b0198cf59731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      alt: 'img3'
    },
  ]

  constructor() { }

  ngOnInit(): void { 
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // Changes slide every 3 seconds
  autoSlideImages(){
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1 //this.images.length -1 === last index in the array
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextClick(){
    if (this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }

}
