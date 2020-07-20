import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisretardComponent } from './avisretard.component';

describe('AvisretardComponent', () => {
  let component: AvisretardComponent;
  let fixture: ComponentFixture<AvisretardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisretardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
