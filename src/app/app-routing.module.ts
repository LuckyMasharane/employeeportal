import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'employee', component: EmployeesComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'employee/add-employee', component: AddEmployeeComponent },
  { path: 'department/add-department', component: AddDepartementComponent },
  { path: 'projects/add-projects', component: AddProjectsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
