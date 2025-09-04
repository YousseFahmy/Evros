import { Component, inject, signal } from '@angular/core';
import { PageContainerComponent } from "../../../components/page-container/page-container.component";
import eryndor from "@data/npcs/eryndor.json"
import branor from "@data/npcs/branor.json"
import { NpcBoxComponent } from "@app/components/npc-box/npc-box.component";
import { CommonModule } from "@angular/common";
import { NPC } from "@app/model/npc/npc.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-npcs',
  standalone: true,
  imports: [PageContainerComponent, NpcBoxComponent, CommonModule],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent {
  router = inject(Router);

  selectedNPCIndex = signal(0);
  npcList!: NPC[];

  ngOnInit(){
    const importList = [eryndor, branor];
    this.npcList = importList.sort((a, b) => a.name.localeCompare(b.name)) as NPC[];
  }

  selectNPC(index: number) {
      this.selectedNPCIndex.set(index);
  }
}
