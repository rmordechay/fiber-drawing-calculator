import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CrystalComponent} from "./crystal/crystal.component";

export const routes: Routes = [
    { path: '', component: CrystalComponent },
    { path: '**', component: CrystalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }