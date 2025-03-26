import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxUserComponent } from './ngrx-user.component';

describe('NgrxUserComponent', () => {
  let component: NgrxUserComponent;
  let fixture: ComponentFixture<NgrxUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
