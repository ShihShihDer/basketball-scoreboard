import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {
  teamAScore: number = 0;
  teamBScore: number = 0;

  incrementScore(team: 'A' | 'B', points: number) {
    if (team === 'A') {
      this.teamAScore += points;
    } else {
      this.teamBScore += points;
    }
  }

  decrementScore(team: 'A' | 'B', points: number) {
    if (team === 'A' && this.teamAScore > 0) {
      this.teamAScore -= points;
    } else if (team === 'B' && this.teamBScore > 0) {
      this.teamBScore -= points;
    }
  }
}
