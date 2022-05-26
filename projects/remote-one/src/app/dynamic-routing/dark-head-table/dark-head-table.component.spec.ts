import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkHeadTableComponent } from './dark-head-table.component';

describe('DarkHeadTableComponent', () => {
  let component: DarkHeadTableComponent;
  let fixture: ComponentFixture<DarkHeadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkHeadTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkHeadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
