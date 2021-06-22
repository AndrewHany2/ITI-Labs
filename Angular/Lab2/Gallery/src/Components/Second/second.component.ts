import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {
  constructor() { }
  currentIndex:number=1;
  ImgSrc:string="assets/Images/1.jpg";
  interval:any=""
 nextImage() {
  this.currentIndex !== 6 ?   this.currentIndex++ : null;
  this.updateImage();

}

 previousImage() {
  this.currentIndex !== 1 ?   this.currentIndex-- : null;
  this.updateImage();
}
 updateImage() {
  this.ImgSrc = "assets/Images/" + this.currentIndex + ".jpg";
}
 startSlideShow() {
  this.interval ? clearInterval(this.interval) : null;
  this.interval = setInterval(() => {
    this.nextImage();
  }, 1000);
}

 stopSlideShow() {
  clearInterval(this.interval);
}
}
