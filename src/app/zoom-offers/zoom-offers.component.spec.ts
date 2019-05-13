import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomOffersComponent } from './zoom-offers.component';

describe('ZoomOffersComponent', () => {
  let component: ZoomOffersComponent;
  let fixture: ComponentFixture<ZoomOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
