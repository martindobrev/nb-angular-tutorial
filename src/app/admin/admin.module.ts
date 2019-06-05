import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { ApiModule } from '../typescript-angular-client';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from '../typescript-angular-client';

@NgModule({
  declarations: [DashboardComponent, NameEditorComponent, ProfileEditorComponent, FormBuilderDemoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ApiModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ], providers: [
    {provide: BASE_PATH, useValue: ''}
  ]
  
})
export class AdminModule { }
