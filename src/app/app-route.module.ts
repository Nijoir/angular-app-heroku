import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsmLoginComponent } from './login/fsm-login/fsm-login.component';
import { MenuFSMComponent } from './menu-fsm/menu-fsm.component';

const routes: Routes = [
  {
    path: '',
    component: FsmLoginComponent
  },
  {
    path: '/menu',
    component: MenuFSMComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
