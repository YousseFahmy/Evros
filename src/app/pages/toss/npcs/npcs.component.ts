import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { PageContainerComponent } from "../../../components/page-container/page-container.component";
import { NpcBoxComponent } from "@app/components/npc-box/npc-box.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; 
import { NPC } from "@app/model/npc/npc.model";
import { Router } from "@angular/router";
import { DataService } from "@app/services/data.service";

@Component({
  selector: 'app-npcs',
  standalone: true,
  imports: [PageContainerComponent, NpcBoxComponent, CommonModule, FormsModule],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent {
  router = inject(Router);
  dataService = inject(DataService);

  selectedNPCId = signal<string>("");
  selectedNPC = computed(() => this.npcList.find(npc => npc.id === this.selectedNPCId())!)

  npcList!: NPC[];
  isMobile = window.innerWidth < 768;

  ngOnInit(){
    this.npcList = this.dataService.getNPCs()
    this.selectedNPCId.set(this.npcList[0].id);
  }

  selectNPC(npcId: string | any) {
    if (!npcId) return;
    this.selectedNPCId.set(npcId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.isMobile = (event.target as Window).innerWidth < 768;
  }
}
