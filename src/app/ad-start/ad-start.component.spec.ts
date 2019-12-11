import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStartComponent } from './ad-start.component';

describe('AdStartComponent', () => {
  let component: AdStartComponent;
  let fixture: ComponentFixture<AdStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
