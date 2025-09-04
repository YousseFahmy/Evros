import { CommonModule } from "@angular/common";
import { Component, inject } from '@angular/core';
import bonds from '@data/bonds.json';
import { PageContainerComponent } from "../../components/page-container/page-container.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-bonds',
  standalone: true,
  imports: [PageContainerComponent, CommonModule],
  templateUrl: './bonds.component.html',
  styleUrl: './bonds.component.css'
})
export class BondsComponent {
  router = inject(Router);

  bonds: string[] = (bonds as any);
  randomIdx: number = 0;

  ngOnInit(){
    this.randomIdx = Math.floor(Math.random() * this.bonds.length);
  }

  onClick(){
    this.randomIdx = Math.floor(Math.random() * this.bonds.length);
  }

}
