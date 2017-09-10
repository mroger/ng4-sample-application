import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFirstColumnComponent } from './dialog-first-column.component';

describe('DialogFirstColumnComponent', () => {
  let component: DialogFirstColumnComponent;
  let fixture: ComponentFixture<DialogFirstColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFirstColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFirstColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
