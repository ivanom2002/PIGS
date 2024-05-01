import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionRecordatorioComponent } from './creacion-recordatorio.component';

describe('CreacionRecordatorioComponent', () => {
  let component: CreacionRecordatorioComponent;
  let fixture: ComponentFixture<CreacionRecordatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionRecordatorioComponent]
    });
    fixture = TestBed.createComponent(CreacionRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
