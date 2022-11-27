import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFolderComponent } from './admin-folder/admin-folder.component';
import { FacultyFolderComponent } from './faculty-folder/faculty-folder.component';
import { LoginComponent } from './login/login.component';
import { AddTasksComponent } from './shared-folder/add-tasks/add-tasks.component';
import { TasksComponent } from './shared-folder/tasks/tasks.component';
import { ViewOneTaskComponent } from './shared-folder/view-one-task/view-one-task.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './student-folder/feedback/feedback.component';
import { StudentFolderComponent } from './student-folder/student-folder.component';

const routes: Routes = [
  { path: "", redirectTo: "/wb", pathMatch: "full" },
  { path: "wb", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "admin", component: AdminFolderComponent,
    children: [
      { path: "", redirectTo: "/admin/task", pathMatch: "full" },
      { path: "task", component: TasksComponent, pathMatch: "full" },
      { path: "postTask", component: AddTasksComponent, pathMatch: "full" },
      { path: "viewTask", component: ViewOneTaskComponent, pathMatch: "full" },
      {path: "feedback", component: FeedbackComponent, pathMatch: "full"}
    ]
  },
  { path: "student", component: StudentFolderComponent, pathMatch: "full" },
  { path: "faculty", component: FacultyFolderComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
