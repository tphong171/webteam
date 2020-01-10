import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "../app/app-routing.module"


import {AppComponent } from './app.component';
import {MenuComponent} from './Component/Blocks/Menu/menu.component'
import {SliderCompoent} from './Component/Blocks/Slider/slider.component'
// import {IntroComponent} from './Component/Blocks/GioiThieu/gioithieu.component'
import {FooterComponent} from './Component/Blocks/Footer/footer.component'
// import {NewsCompoent} from './Component/Blocks/TinTuc/tintuc.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderCompoent,
    FooterComponent
    // UserComponent,
    // CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
