import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusErrorComponent } from './status-error.component';

describe('StatusErrorComponent', () => {
  let component: StatusErrorComponent;
  let fixture: ComponentFixture<StatusErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
