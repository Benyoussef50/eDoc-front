import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojourComponent } from './rojour.component';

describe('RojourComponent', () => {
  let component: RojourComponent;
  let fixture: ComponentFixture<RojourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
