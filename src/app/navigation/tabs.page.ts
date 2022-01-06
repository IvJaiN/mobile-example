import {Component} from '@angular/core';
import {WorksPage} from "../pages/works/works.page";
import {ActionsPage} from "../pages/actions/actions.page";
import {CalendarPage} from "../pages/calendar/calendar.page";
import {ModalService} from "../services/modal.service";

@Component({
    selector: 'app-navigation',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(
        private modalServices: ModalService
    ) {}

    openScreenLoonstrookjes() {
        this.modalServices.presentModal({
            initialBreakpoint: 0.9,
        }, WorksPage);
    }

    openScreenActions() {
        this.modalServices.presentModal({
            initialBreakpoint: 0.5,
            cssClass: 'action-modal'
        }, ActionsPage);
    }

    openScreenDiesten() {
        this.modalServices.presentModal({
            initialBreakpoint: 0.9,
        }, CalendarPage);
    }
}
