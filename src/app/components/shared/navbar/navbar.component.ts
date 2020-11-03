import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

 

  constructor( private heroesService:HeroesService,
    private router:Router) { }

  ngOnInit() {
  }


  buscarHeroe(termino: string){
//     let heroes:Heroe[]=[];
// heroes=this.heroesService.buscarHeroes(termino);
// console.log(heroes);

this.router.navigate(['/busqueda',termino]);

  }

 
}
