import { Injectable } from '@angular/core';
import eryndor from "@data/npcs/eryndor.json"
import branor from "@data/npcs/branor.json"
import callaReed from "@data/npcs/calla-reed.json"
import daraHold from "@data/npcs/dara-hold.json"
import fenArkwright from "@data/npcs/fen-arkwright.json"
import { NPC } from "@app/model/npc/npc.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getNPCs(): NPC[]{
    return [
      branor,
      eryndor,
      callaReed,
      daraHold,
      fenArkwright,
    ].sort((a, b) => a.name.localeCompare(b.name))
  }
}
