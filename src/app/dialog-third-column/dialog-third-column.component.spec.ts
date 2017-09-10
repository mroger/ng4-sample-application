import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogThirdColumnComponent } from './dialog-third-column.component';

describe('DialogThirdColumnComponent', () => {
  let component: DialogThirdColumnComponent;
  let fixture: ComponentFixture<DialogThirdColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogThirdColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThirdColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
