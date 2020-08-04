import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { CompletedTaskListComponent } from './tasks/completed-task-list/completed-task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { QuickCreateComponent } from './tasks/quick-create/quick-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskEditComponent,
    TaskItemComponent,
    HeaderComponent,
    TaskListComponent,
    CompletedTaskListComponent,
    TaskDetailComponent,
    QuickCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
