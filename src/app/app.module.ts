import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuicklinkModule } from 'ngx-quicklink';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    QuicklinkModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
