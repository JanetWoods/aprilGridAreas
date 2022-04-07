import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplayersComponent } from './proplayers.component';

describe('ProplayersComponent', () => {
  let component: ProplayersComponent;
  let fixture: ComponentFixture<ProplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProplayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
