import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  onLearnMore = output<void>();


  emit(){
    console.log("emitting");
    this.onLearnMore.emit();
  }
}
