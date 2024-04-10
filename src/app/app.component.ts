import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { TimerComponent } from "./timer/timer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ScoreboardComponent, TimerComponent]
})
export class AppComponent {
  title = 'basketball-scoreboard';
}
