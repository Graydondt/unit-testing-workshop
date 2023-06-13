import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    const fixture = spectator.fixture;
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-101'`, () => {
    const fixture = spectator.fixture;
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-101');
  });

  it('should render title', () => {
    const fixture = spectator.fixture;
    spectator.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'testing-101 app is running!'
    );
  });
});
