import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedShortComponent } from './selected-short.component';

describe('SelectedShortComponent', () => {
  let component: SelectedShortComponent;
  let fixture: ComponentFixture<SelectedShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
