import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcorrComponent } from './ecorr.component';

describe('EcorrComponent', () => {
  let component: EcorrComponent;
  let fixture: ComponentFixture<EcorrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcorrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
