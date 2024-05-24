import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AppService, Crystal} from "../app.service";


@Component({
    selector: 'app-crystal',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        NgForOf
    ],
    templateUrl: './crystal.component.html',
    styleUrl: './crystal.component.css'
})
export class CrystalComponent implements OnInit {
    radius: number = 0;
    lowerSpeed: number = 0;
    upperSpeed: number = 0;
    crystals: {[key: string]: Crystal} = {};

    protected readonly Object = Object;

    constructor(private service: AppService) {}

    ngOnInit(): void {
        this.crystals = this.service.getAllRows()
    }

    /**
     *
     */
    saveRow() {
        if (this.radius === 0 || this.lowerSpeed === 0 || this.upperSpeed === 0) return;
        const crystalRadius = this.getCrystalRadius()
        const crystal: Crystal = {
            radius: this.radius,
            lowerSpeed: this.lowerSpeed,
            upperSpeed: this.upperSpeed,
            crystalRadius
        }
        const keyId = this.service.getKeyId(this.radius, this.lowerSpeed, this.upperSpeed);
        this.service.setItem(keyId, crystal);
        this.crystals = this.service.getAllRows();
    }

    /**
     *
     */
    getCrystalRadius(): number {
        const v = Math.PI * this.radius * this.radius * this.upperSpeed;
        const r = Math.sqrt(v / (Math.PI * this.lowerSpeed));
        return Number((r * 2).toFixed(2));
    }

    /**
     *
     */
    removeRow(radius: number, lowerSpeed: number, upperSpeed: number) {
        const keyId = this.service.getKeyId(radius, lowerSpeed, upperSpeed)
        this.service.removeItem(keyId)
        delete this.crystals[keyId]
    }
}
