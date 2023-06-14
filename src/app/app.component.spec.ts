import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent(); // We are creating a instance of Appcomponent using spectator
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy(); // Usual standard initial test to see if the component created succesfully
  });

  it(`should have as title 'testing-101'`, () => {
    expect(spectator.component.title).toEqual('testing-101'); // Accessing the AppComponent instance and its properties via spectator
  });

  it('should render title', () => {
    const content = spectator.element.querySelector('.content span')?.textContent; // Selecting a html element via its class name
    expect(content).toContain('testing-101 app is running!');
  });
});
