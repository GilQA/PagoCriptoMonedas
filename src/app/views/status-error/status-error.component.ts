import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-status-error',
  templateUrl: './status-error.component.html',
  styleUrls: ['./status-error.component.sass'],
})
export class StatusErrorComponent implements OnInit {
  constructor(public modale: NgbModal) {}

  ngOnInit(): void {}
}
