import { Component, viewChild } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HeroComponent } from "@app/components/hero/hero.component";
import { PageContainerComponent } from "@app/components/page-container/page-container.component";
import { TextImageSectionComponent } from "@app/components/text-image-section/text-image-section.component";

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
