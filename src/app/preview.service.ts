import { Injectable } from '@angular/core';

@Injectable()
export class PreviewService {

  private player: HTMLAudioElement

  constructor() {}

  private getPlayer() {
    return document.querySelector('audio');
  }

  public play(url: string, onend: Function) {
    let player = this.getPlayer();
    player.src = url;
    player.addEventListener('loadedmetadata', (e) => {
      player.play();
    });
    player.addEventListener('ended', (e) => {
      this.stop();
      player.currentTime = 0;
      onend();
    });
  }

  public stop() {
    this.getPlayer().pause();
  }
}
