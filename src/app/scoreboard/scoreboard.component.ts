import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Team {
  name: string;
  score: number;
}

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ScoreboardComponent {
  teams: Team[] = [
    { name: 'HOME', score: 0 },
    { name: 'GUEST', score: 0 }
  ];

  changeScore(teamIndex: number, delta: number) {
    const newScore = this.teams[teamIndex].score + delta;
    if (newScore >= 0) {
      this.teams[teamIndex].score = newScore;
    }
  }

  resetScore() {
    this.teams.forEach(team => team.score = 0);
  }
}
