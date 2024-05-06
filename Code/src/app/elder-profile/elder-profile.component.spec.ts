import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderProfileComponent } from './elder-profile.component';

describe('ElderProfileComponent', () => {
  let component: ElderProfileComponent;
  let fixture: ComponentFixture<ElderProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElderProfileComponent]
    });
    fixture = TestBed.createComponent(ElderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
