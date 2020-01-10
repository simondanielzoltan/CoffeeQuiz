import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { CategoryQuestionComponent } from './category/category-question/category-question.component';
import { MatIconModule, MatFormFieldModule, MatAutocompleteModule, MatButtonModule, MatInputModule, MatOptionModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'categories', redirectTo: 'categories/1' },
  { path: 'categories/:id', component:CategoriesComponent },
  { path: 'categories/question/:id', component:CategoryQuestionComponent },
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
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
