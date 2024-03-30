// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-scoreboard',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './scoreboard.component.html',
//   styleUrl: './scoreboard.component.scss'
// })
// export class ScoreboardComponent {
//   teamAScore: number = 0;
//   teamBScore: number = 0;

//   incrementScore(team: 'A' | 'B', points: number) {
//     if (team === 'A') {
//       this.teamAScore += points;
//     } else {
//       this.teamBScore += points;
//     }
//   }

//   decrementScore(team: 'A' | 'B', points: number) {
//     if (team === 'A' && this.teamAScore > 0) {
//       this.teamAScore -= points;
//     } else if (team === 'B' && this.teamBScore > 0) {
//       this.teamBScore -= points;
//     }
//   }
// }

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
