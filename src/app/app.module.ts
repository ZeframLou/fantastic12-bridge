import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ApproveComponent } from './approve/approve.component';
import { ExecuteComponent } from './execute/execute.component';
import { TipComponent } from './tip/tip.component';
import { ApproveTokenComponent } from './approve-token/approve-token.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ApproveComponent,
    ExecuteComponent,
    TipComponent,
    ApproveTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
