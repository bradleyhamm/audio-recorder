import { Component, OnInit } from '@angular/core';
import { RecorderService } from '../recorder.service';

@Component({
  selector: 'app-record-button',
  templateUrl: './record-button.component.html',
  styleUrls: ['./record-button.component.css']
})
export class RecordButtonComponent implements OnInit {

  recording: Boolean = false;

  constructor(private recorderService: RecorderService) { }

  ngOnInit() {
  }

  start(): void {
    this.recording = true;
    this.recorderService.start();
  }

  stop(): void {
    this.recording = false;
    this.recorderService.stop();
  }

}
