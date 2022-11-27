import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentFolderComponent } from './student-folder/student-folder.component';
import { FacultyFolderComponent } from './faculty-folder/faculty-folder.component';
import { AdminFolderComponent } from './admin-folder/admin-folder.component';
import { CommonService } from './common.service';
import { TasksComponent } from './shared-folder/tasks/tasks.component';
import { AddTasksComponent } from './shared-folder/add-tasks/add-tasks.component';
import { ViewOneTaskComponent } from './shared-folder/view-one-task/view-one-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentFolderComponent,
    FacultyFolderComponent,
    AdminFolderComponent,
    TasksComponent,
    AddTasksComponent,
    ViewOneTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
