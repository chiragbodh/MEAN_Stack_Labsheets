import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list.component';
import { CourseInfoComponent } from './course-info.component';
@NgModule({ declarations: [AppComponent, StudentListComponent, CourseInfoComponent], imports: [BrowserModule, FormsModule], bootstrap: [AppComponent] })
export class AppModule {}
