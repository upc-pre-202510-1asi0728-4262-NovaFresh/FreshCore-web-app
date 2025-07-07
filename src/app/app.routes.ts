import {RouterModule, Routes} from '@angular/router';
import {Container} from "./containers/page/container/container";
import {NgModule} from "@angular/core";
import {TemplateItem} from "./containers/components/template-item/template-item";
import {Facility} from "./facilities/page/facility/facility";
import {Worker} from "./workers/page/worker/worker";
import { Notifications } from './settings/page/notifications/notifications';
import { Account } from './settings/page/account/account';
import { Subscription } from './settings/page/subscription/subscription';
import { Template } from './containers/page/template/template';
import {Login} from "./account/page/login/login";
import {Register} from "./account/page/register/register";
import { RegisterOwnerCompanyForm } from "./account/components/register-owner-company-form/register-owner-company-form";
import {TokenGuardService} from "./account/service/token-guard.service";
import {PrivilegeGuardService} from "./account/service/privilege-guard.service";
import { BarChartContainersByFacility} from "./dashboard/components/bar-chart-containers-by-facility/bar-chart-containers-by-facility";
import {Dashboard} from "./dashboard/page/dashboard/dashboard";
import {PageNotFound} from "./shared/page/page-not-found/page-not-found";

export const routes: Routes = [
  {
    path:'login',
    component:Login,
  },
  {
    path:'register',
    component:Register,
  },
  {
    path:'register-company',
    component:RegisterOwnerCompanyForm,
  },
  {
    path: 'containers',
    component: Container,
    canActivate: [TokenGuardService, PrivilegeGuardService],
  },
  {
    path: 'templates',
    component: Template,
    canActivate: [TokenGuardService, PrivilegeGuardService],
  },
  {
    path: 'facilities',
    component: Facility,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'AccountManagement' }
  },
  {
    path: 'workers',
    component: Worker,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'WorkerManagement' }
  },
  {
    path: 'notifications',
    component: Notifications,
    canActivate: [TokenGuardService, PrivilegeGuardService],
  },
  {
    path: 'account',
    component: Account,
    canActivate: [TokenGuardService]
  },
  {
    path: 'subscription',
    component: Subscription,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'AccountManagement' }
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [TokenGuardService]
  },

  { path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  { path: '**',
    component:PageNotFound
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
