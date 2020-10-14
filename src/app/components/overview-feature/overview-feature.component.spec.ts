import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFeatureComponent } from './overview-feature.component';

describe('OverviewFeatureComponent', () => {
  let component: OverviewFeatureComponent;
  let fixture: ComponentFixture<OverviewFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
