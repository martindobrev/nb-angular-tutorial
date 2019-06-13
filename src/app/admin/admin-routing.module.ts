import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageresolveService } from './pageresolve.service';
import { PageDeleteComponent } from './page-delete/page-delete.component';
import { PageEditTemplateFormComponent } from './page-edit-template-form/page-edit-template-form.component';
import { PageEditPrimengComponent } from './page-edit-primeng/page-edit-primeng.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';

const routes: Routes = [
  
  { path: '', component: DashboardComponent, children: [
    { path: 'pages', component: PagelistComponent },
    { path: 'pages/edit/:id', component: PageEditComponent, resolve: {page: PageresolveService }},
    { path: 'pages/edit-template-form/:id', component: PageEditTemplateFormComponent, resolve: {page: PageresolveService }},
    { path: 'pages/edit-primeng/:id', component: PageEditPrimengComponent, resolve: {page: PageresolveService }},
    { path: 'pages/delete/:id', component: PageDeleteComponent, resolve: {page: PageresolveService }},
    { path: 'form-control', component: FormControlDemoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
