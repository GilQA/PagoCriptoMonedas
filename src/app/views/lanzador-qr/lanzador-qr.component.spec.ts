import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzadorQRComponent } from './lanzador-qr.component';

describe('LanzadorQRComponent', () => {
  let component: LanzadorQRComponent;
  let fixture: ComponentFixture<LanzadorQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanzadorQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzadorQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
