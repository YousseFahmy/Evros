import { CommonModule } from "@angular/common";
import { Component, input } from '@angular/core';
import { NPC } from "@app/model/npc/npc.model";

@Component({
  selector: 'app-npc-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './npc-box.component.html',
  styleUrl: './npc-box.component.css'
})
export class NpcBoxComponent {

  npc = input.required<NPC>();

}
