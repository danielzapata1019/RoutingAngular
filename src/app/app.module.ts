import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ModulesModule} from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
