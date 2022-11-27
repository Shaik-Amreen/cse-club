import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneTaskComponent } from './view-one-task.component';

describe('ViewOneTaskComponent', () => {
  let component: ViewOneTaskComponent;
  let fixture: ComponentFixture<ViewOneTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
