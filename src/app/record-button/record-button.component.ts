import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-button',
  templateUrl: './record-button.component.html',
  styleUrls: ['./record-button.component.css']
})
export class RecordButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMousedown(e) {
    e.target.classList.add('mousedown');
  }

  onMouseup(e) {
    e.target.classList.remove('mousedown');
  }

}
