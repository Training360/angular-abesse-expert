import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FibListComponent } from './common/fib-list/fib-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FibPipe } from './pipe/fib.pipe';
import { GrowPipe } from './pipe/grow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FibListComponent,
    FibPipe,
    GrowPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
