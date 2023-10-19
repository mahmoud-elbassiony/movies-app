import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(value: number, i: number, totalPages: number): number | string {
    if (i == 0) {
      return 1;
    }
    if (i == 1) {
      if (+value < 5) {
        return 2;
      } else {
        return '....';
      }
    }
    if (i == 2) {
      if (+value < 5) {
        return 3;
      }
      if (+value > +totalPages - 4) {
        return +totalPages - 4;
      } else {
        return +value - 1;
      }
    }
    if (i == 3) {
      if (+value < 5) {
        return 4;
      }
      if (+value > +totalPages - 4) {
        return +totalPages - 3;
      } else {
        return +value;
      }
    }
    if (i == 4) {
      if (+value < 5) {
        return 5;
      }
      if (+value > +totalPages - 4) {
        return +totalPages - 2;
      } else {
        return +value + 1;
      }
    }
    if (i == 5) {
      if (+value > +totalPages - 4) {
        return +totalPages - 1;
      } else {
        return '....';
      }
    }
    if (i == 6) {
      return +totalPages;
    }
    return 0;
  }
}
