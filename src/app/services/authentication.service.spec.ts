import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createServiceFactory({
    service: AuthenticationService,
    mocks: [HttpClient],
  });

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
