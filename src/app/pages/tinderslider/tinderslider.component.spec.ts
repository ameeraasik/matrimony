import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindersliderComponent } from './tinderslider.component';

describe('TindersliderComponent', () => {
  let component: TindersliderComponent;
  let fixture: ComponentFixture<TindersliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TindersliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TindersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
