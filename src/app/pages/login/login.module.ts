import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
