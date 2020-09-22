import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FibListComponent } from './common/fib-list/fib-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FibPipe } from './pipe/fib.pipe';
import { GrowPipe } from './pipe/grow.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FibListComponent,
    FibPipe,
    GrowPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
