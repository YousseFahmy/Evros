import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-text-image-section',
  standalone: true,
  imports: [],
  templateUrl: './text-image-section.component.html',
  styleUrl: './text-image-section.component.css'
})
export class TextImageSectionComponent {

  title = input.required<string>();
  imgPath = input.required<string>();
  reversed = input<boolean>(false);
  xPos = input<number>(50);
  yPos = input<number>(50);

  mainDiv = viewChild.required<ElementRef<HTMLDivElement>>('mainDiv');
  sectionImage = viewChild.required<ElementRef<HTMLDivElement>>('sectionImage');

  ngAfterViewInit() {
    if(this.reversed()) {
      this.mainDiv().nativeElement.classList.add("flex-row-reverse");
    }else{
      this.mainDiv().nativeElement.classList.add("flex-row");
    }

    this.sectionImage().nativeElement.style.objectPosition = `${this.xPos()}% ${this.yPos()}%`;
  }

}
