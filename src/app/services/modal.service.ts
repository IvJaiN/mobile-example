import { Injectable } from '@angular/core';
import {AnimationController, ModalController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  async presentModal(options = {} , component) {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
          .addElement(baseEl.querySelector('ion-backdrop')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
          .addElement(baseEl.querySelector('.modal-wrapper')!)
          .keyframes([
            {offset: 0, opacity: '0', transform: 'scale(0)'},
            {offset: 1, opacity: '0.99', transform: 'scale(1)'}
          ]);

      return this.animationCtrl
          .create()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    const modal = await this.modalController.create({
      component,
      ...options,

      // enterAnimation,
      // leaveAnimation
    });

    return modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  constructor(
      public modalController: ModalController,
      public animationCtrl: AnimationController
  ) { }
}
