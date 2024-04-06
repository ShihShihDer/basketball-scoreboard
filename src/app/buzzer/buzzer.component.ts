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
  playBuzzer() {
    const audio = new Audio('./assets/sounds/buzzer.mp3');
    audio.play();
  }

}
