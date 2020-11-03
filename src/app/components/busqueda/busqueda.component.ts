import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[]=[];
 termino:string;

  constructor(private activateRoute:ActivatedRoute,
    private heroesService:HeroesService,private router:Router) {

      this.activateRoute.params.subscribe(params =>{
    
        this.heroes=this.heroesService.buscarHeroes(params["termino"])
      this.termino=params['termino'];
        });
        console.log(this.heroes);

     }

    

  ngOnInit() {
  }

  verHeroes(idx:number)
  {
 this.router.navigate(['/heroe',idx]);
  }
  
}
