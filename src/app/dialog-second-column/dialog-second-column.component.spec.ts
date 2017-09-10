import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSecondColumnComponent } from './dialog-second-column.component';

describe('DialogSecondColumnComponent', () => {
  let component: DialogSecondColumnComponent;
  let fixture: ComponentFixture<DialogSecondColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSecondColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSecondColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
