import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesavisComponent } from './mesavis.component';

describe('MesavisComponent', () => {
  let component: MesavisComponent;
  let fixture: ComponentFixture<MesavisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesavisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
