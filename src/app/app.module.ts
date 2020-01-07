import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryQuestionComponent } from './category-question/category-question.component';


const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'categories', component:CategoriesComponent },
  { path: 'categories/:id', component:CategoryQuestionComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    CategoryQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
