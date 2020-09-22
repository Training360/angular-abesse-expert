import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class PiperPipe implements PipeTransform {

  transform(value: unknown, pipes?: PipeTransform[], pipeArgs?: any[][]): unknown {
    if (!value || !pipes || !pipeArgs) {
      return value;
    }

    let output: any;

    for (let i = 0; i < pipes.length; i++) {
      pipeArgs[i] = pipeArgs[i] || [];
      const pipe = pipes[i];
      if (pipe?.transform) {
        output = pipe.transform(output || value, ...pipeArgs[i]);
      } else {
        output = output || value;
      }
    }

    return output;
  }

}
