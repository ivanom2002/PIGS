import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderInformationComponent } from './elder-information.component';

describe('ElderInformationComponent', () => {
  let component: ElderInformationComponent;
  let fixture: ComponentFixture<ElderInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElderInformationComponent]
    });
    fixture = TestBed.createComponent(ElderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
