import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(private gameSvc: GameService, private routerSvc: Router) { }

  shortestGame = "";
  longestGame = "";
  avgTurns = "";
  avgGoals = "";
  avgKeepers = "";
  avgCreepers = "";
  gamesWon = "";
  gamesLost = "";

  ngOnInit() {
  }

  playAgain = () => {
    // initialize the time stamp
    this.gameSvc.currentGame.start = new Date().toISOString();
    // navigate to play screen
    this.routerSvc.navigateByUrl("/play")
  }

  homeButton = () => {
    this.routerSvc.navigateByUrl("/home")
  }

  ionViewDidEnter() {
    this.shortestGame = (this.gameSvc.calculateShortestGame() / 1000 / 60).toFixed(2);
    this.longestGame = (this.gameSvc.calculateLongestGame() / 1000 / 60).toFixed(2);
    this.avgTurns = this.gameSvc.calculateAvergeNumberOfRules().toFixed(2);
    this.avgGoals = this.gameSvc.calculateAvergeNumberOfGoals().toFixed(2);
    this.avgKeepers = this.gameSvc.calculateAvergeNumberOfKeepers().toFixed(2);
    this.avgCreepers = this.gameSvc.calculateAvergeNumberOfCreepers().toFixed(2);
    this.gamesWon = this.gameSvc.calculateGamesWon().toFixed(0);
    this.gamesLost = this.gameSvc.calculateGamesLost().toFixed(0);
  }

}
