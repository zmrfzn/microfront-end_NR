import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHttpComponent} from './shared-http.component';

describe('SimpleDynamicTwoComponent', () => {
  let component: SharedHttpComponent;
  let fixture: ComponentFixture<SharedHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
