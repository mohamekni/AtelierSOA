import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteLogComponent } from './ajoute-log.component';

describe('AjouteLogComponent', () => {
  let component: AjouteLogComponent;
  let fixture: ComponentFixture<AjouteLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteLogComponent]
    });
    fixture = TestBed.createComponent(AjouteLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
