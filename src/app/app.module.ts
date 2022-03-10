import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FsmLoginComponent } from './login/fsm-login/fsm-login.component';
import { MenuFSMComponent } from './menu-fsm/menu-fsm.component';
import { AppRoutingModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    FsmLoginComponent,
    MenuFSMComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
