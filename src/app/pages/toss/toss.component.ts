import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HeroComponent } from "../../components/hero/hero.component";
import { TextImageSectionComponent } from "../../components/text-image-section/text-image-section.component";
import { PageContainerComponent } from "../../components/page-container/page-container.component";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-toss',
  standalone: true,
  imports: [HeroComponent, TextImageSectionComponent, PageContainerComponent, RouterModule],
  templateUrl: './toss.component.html',
  styleUrl: './toss.component.css'
})
export class TossComponent {
  pageContainer = viewChild.required<PageContainerComponent>('pageContainer');

  onScrollDown() {
    this.pageContainer().elementRef.nativeElement.scrollIntoView({behavior: "smooth"});
  }

}
