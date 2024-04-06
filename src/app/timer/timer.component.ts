import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PadNumberPipe } from '../uitl/pad-number.pipe';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [CommonModule, FormsModule, PadNumberPipe]
})
export class TimerComponent implements OnInit, OnDestroy {
  countDownLanguage = 'ch';
  shotClockRangeValue = 0.00;
  shotClock: number = 0.00;
  private shotClockSubscription?: Subscription;
  private audioMap: { [key: number]: HTMLAudioElement } = {};

  constructor() {
    this.loadAudioFiles();
  }

  ngOnInit() {
    this.loadAudioFiles
    this.startShotClock();
  }

  loadAudioFiles() {
    this.audioMap = {}; 
    for (let i = 1; i <= 10; i++) {
      this.audioMap[i] = new Audio(`./assets/sounds/${this.countDownLanguage}/${i}.mp3`);
    }
    this.audioMap[0.01] = new Audio(`./assets/sounds/0.mp3`);
  }

  startShotClock() {
    if (this.shotClockSubscription) {
      this.shotClockSubscription.unsubscribe();
    }
    this.shotClockSubscription = timer(0, 10).subscribe(() => {
      if (this.shotClock > 0.00) {
        this.shotClock = parseFloat((this.shotClock - 0.01).toFixed(2));
        this.playSoundForSecond(this.shotClock);
      }
      else {
        this.shotClockSubscription?.unsubscribe();
      }
    });
  }

  onLanguageChange() {
    this.loadAudioFiles(); 
  }

  customShotClock(time: number) {
    this.shotClockSubscription?.unsubscribe();
    this.shotClock = parseFloat((this.shotClock + 1).toFixed(2));
  }

  resetShotClock(time: number) {
    this.shotClockSubscription?.unsubscribe();
    this.shotClock = parseFloat(time.toFixed(2));
    this.startShotClock();
  }



  pauseShotClock() {
    this.shotClockSubscription?.unsubscribe();
  }



  ngOnDestroy() {
    this.shotClockSubscription?.unsubscribe();
  }

  private playSoundForSecond(second: number) {
    if (second == 10 || second == 9 || second == 8 || second == 7 || second == 6 || second == 5 || second == 4 || second == 3 || second == 2 || second == 1 || second == 0.01) {
      this.audioMap[second].play();
    }
  }
}
