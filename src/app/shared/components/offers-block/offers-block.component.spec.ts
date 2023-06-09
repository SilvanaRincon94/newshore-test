import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBlockComponent } from './offers-block.component';

describe('OffersBlockComponent', () => {
  let component: OffersBlockComponent;
  let fixture: ComponentFixture<OffersBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
