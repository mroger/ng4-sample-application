import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreeComponent } from './list-three.component';

describe('ListThreeComponent', () => {
  let component: ListThreeComponent;
  let fixture: ComponentFixture<ListThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
