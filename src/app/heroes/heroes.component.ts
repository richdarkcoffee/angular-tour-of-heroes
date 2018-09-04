import { Component, OnInit } from '@angular/core';
// It was important to not use .js here and just state the object file name
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// Changed the import of HEROES because we're going to use a service
import { HEROES, HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  // heroes = HEROES;
  // Replaced definition of heroes property with:
  heroes: Hero[];

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  

}
