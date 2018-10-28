import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiondisplayComponent } from './regiondisplay.component';

describe('RegiondisplayComponent', () => {
  let component: RegiondisplayComponent;
  let fixture: ComponentFixture<RegiondisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiondisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiondisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
