import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { from, isObservable, Observable, Subject, Subscription, throwError } from 'rxjs';
import { distinctUntilChanged, switchAll, tap } from 'rxjs/operators';

const isPromise = (obj: any): boolean => {
  return obj.then && obj.resolve;
};

@Pipe({
  name: 'push',
  pure: false
})
export class PushPipe implements OnDestroy, PipeTransform {

  value: any = null;
  subscription: Subscription;
  observableToSubscribeSubject: Subject<any> = new Subject<Observable<any>>();
  obs$: Observable<any> = this.observableToSubscribeSubject
    .pipe(
      distinctUntilChanged(Object.is),
      switchAll(),
      distinctUntilChanged(),
      tap( v => {
        this.value = v;
        this.ref.detectChanges();
      })
    );

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    this.subscription = this.obs$.subscribe();
  }

  transform(obj: Observable<any> | Promise<any> | null | undefined): any {
    if (isObservable(obj) || isPromise(obj)) {
      this.observableToSubscribeSubject.next( from(obj) );
      return this.value;
    }

    throwError(new Error('invalidPipeArgumentError'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
