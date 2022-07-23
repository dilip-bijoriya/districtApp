import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRoutingModule } from './full-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { HeaderComponent } from 'src/app/shared';
@NgModule({
  imports: [
    CommonModule,
    FullRoutingModule
  ],
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
  ],
  providers: [],
})
export class FullModule { }
