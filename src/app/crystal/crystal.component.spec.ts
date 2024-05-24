import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CrystalComponent} from './crystal.component';

describe('CrystalComponent', () => {
    let component: CrystalComponent;
    let fixture: ComponentFixture<CrystalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CrystalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CrystalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
