import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesService } from './employees.service';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeesComponent,
    ProjectsComponent,
    WelcomepageComponent,
    DialogComponent,
    UpdateDialogComponent,
    AddEmployeeComponent,
    AddDepartementComponent,
    AddProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  bootstrap:    [ AppComponent ],
  entryComponents:[ DialogComponent,UpdateDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [EmployeesService],
})
export class AppModule { }
