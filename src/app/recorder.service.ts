import { Injectable } from '@angular/core';

@Injectable()
export class RecorderService {

  private stream: MediaStream;
  private recorder: MediaRecorder;
  private blob: Blob;

  constructor() {
    if (!this.isSupported()) {
      window.alert('Audio recording is not supported');
    }
  }

  public start() {
    navigator.mediaDevices.getUserMedia({audio: true}).then((stream: MediaStream) => {
      let chunks = [];
      this.recorder = new MediaRecorder(stream, {});
      this.recorder.ondataavailable = (e: Event) => {
        chunks.push(e.data);
        if (this.recorder.state === 'inactive') {
          this.blob = new Blob(chunks, {type: 'audio/webm'});
        }
      }
      this.recorder.start(1000);
    });
  }

  public stop() {
    this.recorder.stop();
    console.log(this.blob);
    setTimeout(() => {
      console.log(this.blob);
    }, 1500);
  }

  public getBlob: Blob () {
    return this.blob;
  }

  public isSupported: Boolean () {
    return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  }

}
