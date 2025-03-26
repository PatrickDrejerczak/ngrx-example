import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxChildComponent } from './ngrx-child.component';

describe('NgrxChildComponent', () => {
  let component: NgrxChildComponent;
  let fixture: ComponentFixture<NgrxChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
