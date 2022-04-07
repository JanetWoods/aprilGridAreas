import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteamsComponent } from './proteams.component';

describe('ProteamsComponent', () => {
  let component: ProteamsComponent;
  let fixture: ComponentFixture<ProteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
