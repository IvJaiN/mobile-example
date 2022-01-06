import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {CalendarPage} from "../calendar/calendar.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  constructor(
      private modalService: ModalService,
      private route: Router
  ) { }

  ngOnInit() {
  }

    closeModal() {
        this.modalService.dismiss()
    }

    changePageUren() {
      this.modalService.dismiss()
      this.route.navigate([''])
    }
}
