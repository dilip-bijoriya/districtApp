
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleLayoutComponent } from './simple-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SigninComponent } from 'src/app/pages/signin/signin.component';
@NgModule({
    imports: [
        CommonModule,
        SimpleRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations:[
        SimpleLayoutComponent,
        SigninComponent
    ],
    providers:[
        
    ]
})
export class SimpleModule {

 }