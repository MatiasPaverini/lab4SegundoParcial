import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResgisterComponent } from './components/initial/resgister/resgister.component';
import { LoginComponent } from './components/initial/login/login.component';
import { HeaderComponent } from './components/extra/header/header.component';
import { ClassListComponent } from './components/lists/class-list/class-list.component';
import { UserListComponent } from './components/lists/user-list/user-list.component';
import { AdminListComponent } from './components/lists/admin-list/admin-list.component';
import { StudentListComponent } from './components/lists/student-list/student-list.component';
import { TeacherListComponent } from './components/lists/teacher-list/teacher-list.component';
import { ClassesTakenListComponent } from './components/lists/classes-taken-list/classes-taken-list.component';
import { ClassesAbmComponent } from './components/abm/classes-abm/classes-abm.component';
import { ClassEnrollmentComponent } from './components/abm/class-enrollment/class-enrollment.component';
import { ClassStatusPipe } from './pipes/class-status.pipe';
import { ClassSizeDirective } from './directives/class-size/class-size.directive';
import { TeacherClassListComponent } from './components/lists/teacher-class-list/teacher-class-list.component';
import { StudentClassListComponent } from './components/lists/student-class-list/student-class-list.component';
import { ClassDetailListComponent } from './components/lists/class-detail-list/class-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgisterComponent,
    LoginComponent,
    HeaderComponent,
    ClassListComponent,
    UserListComponent,
    AdminListComponent,
    StudentListComponent,
    TeacherListComponent,
    ClassesTakenListComponent,
    ClassesAbmComponent,
    ClassEnrollmentComponent,
    ClassStatusPipe,
    ClassSizeDirective,
    TeacherClassListComponent,
    StudentClassListComponent,
    ClassDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
