import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecorderService {

  private audioTrack: MediaStreamTrack | undefined;
  private subject: Subject<Object> | undefined;
  private recorder: any;

  constructor() {}

  ngOnInit() {
    if (!this.isSupported()) {
      window.alert("Audio recording is not supported");
    }
  }

  public start() {
    navigator.mediaDevices.getUserMedia({audio: true}).then((stream: MediaStream) => {
      let chunks: string[] = [];
      this.audioTrack = stream.getAudioTracks()[0];
      this.recorder = new MediaRecorder(stream, {});
      this.recorder.ondataavailable = (e: any) => {
        chunks.push(e.data);
        if (this.recorder.state === "inactive") {
          this.addRecording(new Blob(chunks, {type: "audio/webm"}));
        }
      }
      this.recorder.start(1000);
    });
  }

  public stop() {
    this.recorder.stop();
    this.audioTrack?.stop();
  }

  public isSupported(): Boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  public getRecordings() {
    this.subject = new Subject();
    return this.subject;
  }

  private addRecording(blob: Blob) {
    let url = URL.createObjectURL(blob);
    this.subject?.next(url);
  }

}
