import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetRegistrationPage } from './asset-registration.page';

describe('AssetRegistrationPage', () => {
  let component: AssetRegistrationPage;
  let fixture: ComponentFixture<AssetRegistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssetRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
