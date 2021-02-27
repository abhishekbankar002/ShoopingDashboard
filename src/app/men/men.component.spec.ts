import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenComponent } from './men.component';

describe('MenComponent', () => {
  let component: MenComponent;
  let fixture: ComponentFixture<MenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
