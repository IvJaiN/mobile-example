import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})
export class WorksPage implements OnInit {


  constructor(private modalService: ModalService) { }

  ngOnInit() {}

  closeModal() {
    this.modalService.dismiss()
  }

}
