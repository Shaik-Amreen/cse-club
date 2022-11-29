import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFolderComponent } from './admin-folder/admin-folder.component';
import { FacultyFolderComponent } from './faculty-folder/faculty-folder.component';
import { LoginComponent } from './login/login.component';
import { AddTasksComponent } from './shared-folder/task-parent/add-tasks/add-tasks.component';
import { TaskParentComponent } from './shared-folder/task-parent/task-parent.component';
import { TasksComponent } from './shared-folder/task-parent/tasks/tasks.component';
import { ViewOneTaskComponent } from './shared-folder/task-parent/view-one-task/view-one-task.component';
import { ViewSubmissionComponent } from './shared-folder/view-submission/view-submission.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './student-folder/feedback/feedback.component';
import { StudentFolderComponent } from './student-folder/student-folder.component';

const routes: Routes = [
  { path: "", redirectTo: "/wb", pathMatch: "full" },
  { path: "wb", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "admin", component: AdminFolderComponent,
    data: {
      role: "admin"
    },
    children: [
      { path: "", redirectTo: "/admin/task", pathMatch: "full" },
      {
        path: "task", component: TaskParentComponent,
        children: [
          { path: "", component: TasksComponent, pathMatch: "full" },
          { path: "postTask", component: AddTasksComponent, pathMatch: "full" },
          { path: "viewTask", component: ViewOneTaskComponent, pathMatch: "full" },
        ]
      },
      { path: "submissions", component: ViewSubmissionComponent, pathMatch: "full" },
      { path: "feedback", component: FeedbackComponent, pathMatch: "full" }
    ]
  },
  {
    path: "student", component: StudentFolderComponent,
    data: {
      role: "student"
    },
    children: [
      { path: "", redirectTo: "/student/task", pathMatch: "full" },
      {
        path: "task", component: TaskParentComponent,
        children: [
          { path: "", component: TasksComponent, pathMatch: "full" },
          { path: "viewTask", component: ViewOneTaskComponent, pathMatch: "full" },
        ]
      },
      { path: "submissions", component: ViewSubmissionComponent, pathMatch: "full" },
      { path: "feedback", component: FeedbackComponent, pathMatch: "full" }

    ],
  },
  { path: "faculty", component: FacultyFolderComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
