
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes
  ],
  declarations: [
    HomeComponent,
    ProductComponent
  ]
})
export class HomeModule { }
