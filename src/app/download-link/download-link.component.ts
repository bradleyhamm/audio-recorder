import { Component, OnInit } from '@angular/core';
import { RecorderService } from '../recorder.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-download-link',
  templateUrl: './download-link.component.html',
  styleUrls: ['./download-link.component.css']
})
export class DownloadLinkComponent implements OnInit {

  url: String = null;
  filename: String = null;

  constructor(private recorderService: RecorderService) { }

  ngOnInit() {

  }

}
