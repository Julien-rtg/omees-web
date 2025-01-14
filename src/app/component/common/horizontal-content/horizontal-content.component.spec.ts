import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalContentComponent } from './horizontal-content.component';

describe('HorizontalContentComponent', () => {
  let component: HorizontalContentComponent;
  let fixture: ComponentFixture<HorizontalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
