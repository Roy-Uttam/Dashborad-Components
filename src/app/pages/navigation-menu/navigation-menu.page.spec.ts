import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationMenuPage } from './navigation-menu.page';

describe('NavigationMenuPage', () => {
  let component: NavigationMenuPage;
  let fixture: ComponentFixture<NavigationMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavigationMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
