import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssesmentModalPage } from './assesment-modal.page';

describe('AssesmentModalPage', () => {
  let component: AssesmentModalPage;
  let fixture: ComponentFixture<AssesmentModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssesmentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
