import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './page/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushPipe } from './pipe/push.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PushPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
