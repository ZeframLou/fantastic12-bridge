import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ApproveComponent } from './approve/approve.component';
import { ExecuteComponent } from './execute/execute.component';
import { TipComponent } from './tip/tip.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
