import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class TimerComponent implements OnDestroy, OnInit {
  countDownLanguage = [
    { value: 'ch', viewValue: '中文' },
    { value: 'hk', viewValue: '客語' },
    { value: 'en', viewValue: 'English' }
  ];

  chAudioFiles: HTMLAudioElement[] = [new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio()];
  hkAudioFiles: HTMLAudioElement[] = [new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio()];
  enAudioFiles: HTMLAudioElement[] = [new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio()];
  currentAudioFiles: HTMLAudioElement[] = [new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio(), new Audio()];
  audioTimeout: HTMLAudioElement = new Audio();

  shotClockRangeValue = 0.00;
  shotClock: number = 0.00;
  private shotClockSubscription?: Subscription;
  currentLanguage = this.countDownLanguage[0].value;


  constructor() {
    console.log("constructor");
    this.loadAudioFiles();
  }

  ngOnInit() {

    console.log("ngOnInit");

    // this.loadAudioFiles;
    this.startShotClock();

    console.log("countDownLanguage");
    console.log(this.countDownLanguage);
    console.log('currentLanguage');
    console.log(this.currentLanguage)
    console.log('audioMap');
    console.log(this.chAudioFiles);
    console.log(this.hkAudioFiles);
    console.log(this.enAudioFiles);
    // console.log(this.audioMap['ch'][5]);

  }

  loadAudioFiles() {
    
      for (let i = 1; i <= 10; i++) {
        console.log(i+'-ch.mp3')
        this.chAudioFiles[i] = new Audio(`./assets/sounds/ch/${i}.mp3`);
        this.hkAudioFiles[i] = new Audio(`./assets/sounds/hk/${i}.mp3`);
        this.enAudioFiles[i] = new Audio(`./assets/sounds/en/${i}.mp3`);
      }
    this.audioTimeout = new Audio(`./assets/sounds/0.mp3`);
    this.currentAudioFiles = this.chAudioFiles;
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
    console.log('onLanguageChange');
    console.log(this.currentLanguage);
    switch (this.currentLanguage) {

      case 'ch':
        console.log('ch');
        this.currentAudioFiles = this.chAudioFiles;
        break;
      case 'hk':
        console.log('hk');
        this.currentAudioFiles = this.hkAudioFiles;
        break;
      case 'en':
        console.log('en');
        this.currentAudioFiles = this.enAudioFiles;
        break;
    }
  }

  // customShotClock(time: number) {
  //   this.shotClockSubscription?.unsubscribe();
  //   this.shotClock = parseFloat((this.shotClock + 1).toFixed(2));
  // }

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
    if (second == 10 || second == 9 || second == 8 || second == 7 || second == 6 || second == 5 || second == 4 || second == 3 || second == 2 || second == 1 ) {
      this.currentAudioFiles[second].play();
    }if (second == 0.01) {
      this.audioTimeout.play();
    }
  }
}
