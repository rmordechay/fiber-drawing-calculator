import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CrystalComponent} from "./crystal/crystal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CrystalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
