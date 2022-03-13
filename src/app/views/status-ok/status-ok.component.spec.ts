import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOkComponent } from './status-ok.component';

describe('StatusOkComponent', () => {
  let component: StatusOkComponent;
  let fixture: ComponentFixture<StatusOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
