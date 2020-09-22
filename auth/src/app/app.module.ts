import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './common/navigation/navigation.component';
import { ConfigService } from './service/config.service';
import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';
import { LoginComponent } from './page/login/login.component';
import { PiperPipe } from './pipe/piper.pipe';
import { RolePipe } from './pipe/role.pipe';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    PiperPipe,
    RolePipe,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: ConfigService) => service.bootstrap(),
      deps: [ConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
