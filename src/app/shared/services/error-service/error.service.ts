import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorMsg: BehaviorSubject<string>;
  errorCode: BehaviorSubject<number>;
  constructor() {
    this.errorMsg = new BehaviorSubject<string>('');
    this.errorCode = new BehaviorSubject<number>(404);
  }

  getErrorMsg() {
    return this.errorMsg.asObservable();
  }

  setErrorMsg(msg: string) {
    this.errorMsg.next(msg);
  }
  getErrorCode() {
    return this.errorCode.asObservable();
  }

  setErrorCode(code: number) {
    this.errorCode.next(code);
  }
}
