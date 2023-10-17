import { TestBed } from '@angular/core/testing';

import { LoaderinterceptorInterceptor } from './loaderinterceptor.interceptor';

describe('LoaderinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderinterceptorInterceptor = TestBed.inject(LoaderinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
