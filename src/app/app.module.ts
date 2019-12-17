import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ApproveComponent } from './approve/approve.component';
import { ExecuteComponent } from './execute/execute.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ApproveComponent,
    ExecuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
