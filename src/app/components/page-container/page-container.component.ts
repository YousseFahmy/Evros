import { AfterViewInit, Component, ElementRef, inject, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent implements AfterViewInit {
  elementRef = inject(ElementRef);

  gutter = input<number>(3);
  pageContainer = viewChild.required<ElementRef<HTMLDivElement>>('pageContainer');

  ngAfterViewInit(): void{
    this.pageContainer().nativeElement.classList.add(`px-${this.gutter()}`);
  }

}
