import { Component, OnInit } from '@angular/core';
// It was important to not use .js here and just state the object file name
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {

  }

}
