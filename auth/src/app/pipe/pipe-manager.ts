import { CurrencyPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { RolePipe } from './role.pipe';

export class PipeManager {
  private static pipes = {
    slice: new SlicePipe(),
    upperCase: new UpperCasePipe(),
    lowerCase: new LowerCasePipe(),
    currencyEN: new CurrencyPipe('en'),
    currrencyHU: new CurrencyPipe('hu'),
    // Own pipes.
    role: new RolePipe(),
  };

  public static PipeForKey(key: string): PipeTransform {
    return PipeManager.pipes[key];
  }
}
