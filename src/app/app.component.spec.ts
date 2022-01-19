import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { callTester, getElements } from './mocks/utils';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { EventService } from './service/event.service';
import { Event } from './model/event';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        EventsListComponent,
      ],
      providers: [
        {
          provide: EventService,
          useValue: {
            getAll() {
              return [
                new Event(),
                new Event(),
                new Event(),
              ];
            }
          }
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`AppComponent should contain a router-outlet`, () => {
    const outlets = getElements(fixture, 'router-outlet');

    fixture.whenStable().then(() => {
      expect(outlets.length > 0).toBeTruthy();
    });
  });

});
