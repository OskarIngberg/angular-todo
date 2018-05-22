import { TestBed, inject } from '@angular/core/testing';

import { LoginCrudService } from './login-crud.service';

describe('LoginCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginCrudService]
    });
  });

  it('should be created', inject([LoginCrudService], (service: LoginCrudService) => {
    expect(service).toBeTruthy();
  }));
});
