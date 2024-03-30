import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  providers: [DatePipe]
})
export class TimerComponent implements OnInit, OnDestroy {
  shotClock: number = 24;
  gameClock: number = 10 * 60; // 假设一节比赛时间为10分钟
  shotClockSubscription!: Subscription;
  gameClockSubscription!: Subscription;

  ngOnInit() {
    this.startShotClock();
    this.startGameClock();
  }

  startShotClock() {
    this.shotClockSubscription = interval(1000).subscribe(() => {
      if (this.shotClock > 0) {
        this.shotClock--;
      }
    });
  }

  resetShotClock() {
    this.shotClockSubscription?.unsubscribe();
    this.shotClock = 24; // 或者14秒，根据实际需要重置
    this.startShotClock();
  }

  startGameClock() {
    this.gameClockSubscription = interval(1000).subscribe(() => {
      if (this.gameClock > 0) {
        this.gameClock--;
      }
    });
  }

  ngOnDestroy() {
    this.shotClockSubscription?.unsubscribe();
    this.gameClockSubscription?.unsubscribe();
  }
}
