import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDiscoverComponent } from './banner-discover.component';

describe('BannerDiscoverComponent', () => {
  let component: BannerDiscoverComponent;
  let fixture: ComponentFixture<BannerDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
