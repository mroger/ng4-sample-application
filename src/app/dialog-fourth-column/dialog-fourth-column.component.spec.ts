import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFourthColumnComponent } from './dialog-fourth-column.component';

describe('DialogFourthColumnComponent', () => {
  let component: DialogFourthColumnComponent;
  let fixture: ComponentFixture<DialogFourthColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFourthColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFourthColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
