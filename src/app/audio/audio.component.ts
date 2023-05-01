import { Component, ViewChild, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {
  @ViewChild('audio') audio!: ElementRef;
  @Input() audioSrc!: string;

  progress = 0;
  isPlay = false;
  volume = 1;

  

  playAudio() {
    if (this.isPlay ) {
      this.audio.nativeElement.pause();
      this.isPlay = false;
    }
    else{
      this.audio.nativeElement.play();
      this.isPlay = true;
    }
  }

  scrub(event: any) {
    this.audio.nativeElement.currentTime = (event.target.value / 100) * this.audio.nativeElement.duration;
  }

  ngAfterViewInit() {
    this.audio.nativeElement.addEventListener('timeupdate', () => {
      this.progress = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;
    });
  }

  volumeLevel(event: any ) {
    this.volume = event.target.value;
    this.audio.nativeElement.volume = this.volume;
  }

}
