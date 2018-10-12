import { TestBed } from '@angular/core/testing';

import { TodoMottoService } from './todo-motto.service';

describe('TodoMottoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoMottoService = TestBed.get(TodoMottoService);
    expect(service).toBeTruthy();
  });
});
