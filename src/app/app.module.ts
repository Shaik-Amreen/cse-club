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
import { TasksComponent } from './shared-folder/task-parent/tasks/tasks.component';
import { AddTasksComponent } from './shared-folder/task-parent/add-tasks/add-tasks.component';
import { ViewOneTaskComponent } from './shared-folder/task-parent/view-one-task/view-one-task.component';
import { AddFeedbackQuestionsComponent } from './admin-folder/add-feedback-questions/add-feedback-questions.component';
import { FeedbackComponent } from './student-folder/feedback/feedback.component';
import { TaskParentComponent } from './shared-folder/task-parent/task-parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './shared-folder/modal/modal.component';
import { ViewSubmissionComponent } from './shared-folder/view-submission/view-submission.component';

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
    ViewOneTaskComponent,
    AddFeedbackQuestionsComponent,
    FeedbackComponent,
    TaskParentComponent,
    ModalComponent,
    ViewSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
