import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDynamicComponent } from './simple-dynamic.component';

describe('SimpleDynamicComponent', () => {
  let component: SimpleDynamicComponent;
  let fixture: ComponentFixture<SimpleDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
