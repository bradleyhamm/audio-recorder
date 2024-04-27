class RecorderService {

  private audioTrack: MediaStreamTrack | undefined;
  private recorder: any;

  public record(): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      navigator.mediaDevices.getUserMedia({audio: true}).then((stream: MediaStream) => {
        let chunks: string[] = [];
        this.audioTrack = stream.getAudioTracks()[0];
        this.recorder = new MediaRecorder(stream, {});
        this.recorder.ondataavailable = (e: any) => {
          chunks.push(e.data);
          if (this.recorder.state === "inactive") {
            resolve(new Blob(chunks, {type: "audio/webm"}));
          }
        }
        this.recorder.start(1000);
      });
    });
  }

  public stop() {
    this.recorder.stop();
    this.audioTrack?.stop();
  }

  public isSupported(): Boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

}

let recorderService = new RecorderService();

export default recorderService;