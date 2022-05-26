import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaComponent } from './cocoa.component';

describe('CocoaComponent', () => {
  let component: CocoaComponent;
  let fixture: ComponentFixture<CocoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
