import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CaraouselComponent } from './home/caraousel/caraousel.component';
import { SliderComponent } from './home/slider/slider.component';
import { CardsComponent } from './home/cards/cards.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    CaraouselComponent,
    SliderComponent,
    CardsComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    CaraouselComponent,
    SliderComponent,
    CardsComponent,
],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
