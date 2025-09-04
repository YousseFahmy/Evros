import { Routes } from '@angular/router';
import { TossComponent } from "./pages/toss/toss.component";
import { NpcsComponent } from "./pages/toss/npcs/npcs.component";
import { BondsComponent } from "./pages/bonds/bonds.component";
import { title } from "process";

export const routes: Routes = [
    {path: "npcs", component: NpcsComponent, title: "NPCs | Tears of the Singing Sky | Evros"},
    {path: "bonds", component: BondsComponent, title: "Bond Generator | Evros"},
    {path: "**", component: TossComponent, title: "Tears of the Singing Sky | Evros"}
];
