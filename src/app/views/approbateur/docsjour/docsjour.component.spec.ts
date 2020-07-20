import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsjourComponent } from './docsjour.component';

describe('DocsjourComponent', () => {
  let component: DocsjourComponent;
  let fixture: ComponentFixture<DocsjourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsjourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
