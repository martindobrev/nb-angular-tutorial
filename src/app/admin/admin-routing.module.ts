import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageresolveService } from './pageresolve.service';

const routes: Routes = [
  
  { path: '', component: DashboardComponent, children: [
    { path: 'pages', component: PagelistComponent },
    { path: 'pages/edit/:id', component: PageEditComponent, resolve: {page: PageresolveService}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
