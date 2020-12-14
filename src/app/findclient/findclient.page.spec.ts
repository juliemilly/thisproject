import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindclientPage } from './findclient.page';

describe('FindclientPage', () => {
  let component: FindclientPage;
  let fixture: ComponentFixture<FindclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
