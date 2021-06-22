import { Directive, ElementRef, HostListener, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective  implements OnInit {
  
  @Input('appCustom') myInput:any
  constructor(private myRef:ElementRef) { 
  }
    ngOnInit() {
    this.myRef.nativeElement.style.backgroundColor="white";
    this.myRef.nativeElement.style.color="black";
    this.myRef.nativeElement.style.fontFamily="default";

    }
@HostListener('click') click(){
    this.myRef.nativeElement.style.backgroundColor=this.myInput.bgColor;
    this.myRef.nativeElement.style.color=this.myInput.fColor;
    this.myRef.nativeElement.style.fontFamily=this.myInput.fontFamily;
}

}
