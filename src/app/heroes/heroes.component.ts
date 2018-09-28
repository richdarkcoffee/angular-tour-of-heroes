import { Component, OnInit } from '@angular/core';
// It was important to not use .js here and just state the object file name
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// Changed the import of HEROES because we're going to use a service
import { HeroService } from '../hero.service';

  @Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {
    heroes: Hero[];
  
    constructor(private heroService: HeroService) { }
  
    ngOnInit() {
      this.getHeroes();
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
  }