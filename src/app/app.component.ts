import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { TimerComponent } from "./timer/timer.component";
import { BuzzerComponent } from "./buzzer/buzzer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ScoreboardComponent, TimerComponent, BuzzerComponent]
})
export class AppComponent {
  title = 'basketball-scoreboard';
}
