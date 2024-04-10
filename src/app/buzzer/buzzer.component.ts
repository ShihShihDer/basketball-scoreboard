import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buzzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buzzer.component.html',
  styleUrl: './buzzer.component.scss'
})
export class BuzzerComponent {
  audio: HTMLAudioElement = new Audio();

  ngOnInit() {
    this.audio = new Audio('./assets/sounds/buzzer.mp3');
  }

  playBuzzer() {
    this.audio.play();
  }

}
