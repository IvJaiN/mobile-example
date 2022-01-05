import { Component } from '@angular/core';
import {CalendarPage} from "../calendar/calendar.page";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  date = new Date()

  constructor(private modalServices: ModalService) {}

  openCalendar() {
    this.modalServices.presentModal({
      initialBreakpoint: 0.9,
    }, CalendarPage);
  }
}
