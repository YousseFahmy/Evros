import { Injectable } from '@angular/core';
import eryndor from "@data/npcs/eryndor.json"
import branor from "@data/npcs/branor.json"
import { NPC } from "@app/model/npc/npc.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getNPCs(): NPC[]{
    return [
      branor,
      eryndor,
    ].sort((a, b) => a.name.localeCompare(b.name))
  }
}
