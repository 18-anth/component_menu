import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from './avatar/avatar.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    BotonComponent
  ],
  exports: [
    HeaderComponent,
    AvatarComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
