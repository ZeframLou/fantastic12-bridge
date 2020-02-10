import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ApproveComponent } from './approve/approve.component';
import { ExecuteComponent } from './execute/execute.component';
import { TipComponent } from './tip/tip.component';
import { ApproveTokenComponent } from './approve-token/approve-token.component';

const routes: Routes = [
  {
    path: 'create/:summoner',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'approve',
    component: ApproveComponent,
    pathMatch: 'full'
  },
  {
    path: 'execute',
    component: ExecuteComponent,
    pathMatch: 'full'
  },
  {
    path: 'tip',
    component: TipComponent,
    pathMatch: 'full'
  },
  {
    path: 'approve-token',
    component: ApproveTokenComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
