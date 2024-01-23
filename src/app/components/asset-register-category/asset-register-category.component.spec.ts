import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetRegisterCategoryComponent } from './asset-register-category.component';

describe('AssetRegisterCategoryComponent', () => {
  let component: AssetRegisterCategoryComponent;
  let fixture: ComponentFixture<AssetRegisterCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRegisterCategoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetRegisterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
