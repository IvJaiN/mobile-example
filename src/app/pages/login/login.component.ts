import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  login:String = ''
  password:String = ''
  isValidLogin:boolean = true
  isValidPassword:boolean = true
  isLoading: boolean = true;

  constructor(private route: Router,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.formLogin = new FormGroup({})
  }

    changePage() {
      if (!this.login) {
        this.isValidLogin = false
      } else if (!this.password) {
        this.isValidPassword = false
      } else {
        this.presentLoading()
        setTimeout(() => {
          this.route.navigate(['/navigation'])
        }, 2500)
      }
    }

  changeInput($event: any, field:string) {
    if (field === 'login') {
      this.login = $event.target.value
    } else {
      this.password = $event.target.value
    }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circular',
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
      backdropDismiss: true,
      animated: true,
      keyboardClose: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }




}
