import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PreviewService {

  private _player: HTMLAudioElement | undefined | null

  private get player(): HTMLAudioElement | undefined | null {
    if (!this._player) {
      this._player = document.querySelector("audio");
    }

    return this._player;

  }

  public play(url: string, onend: Function) {
    if (this.player) {
      this.player.src = url;
      this.player.addEventListener("loadedmetadata", () => {
        this.player?.play();
      });
      this.player.addEventListener("ended", () => {
        this.stop();
        if (this.player) {
          this.player.currentTime = 0;
        }
        onend();
      });
    }
  }

  public stop() {
    this.player?.pause();
  }
}
