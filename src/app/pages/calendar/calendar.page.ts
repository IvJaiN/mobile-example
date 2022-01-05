import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() {}

  onPress(event: any) {
    console.log(event.target.value)
  }

}
