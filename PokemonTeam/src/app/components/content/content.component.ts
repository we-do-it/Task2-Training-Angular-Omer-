import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { AppState } from 'src/app/state/app.state';
import { addPokemon, removePokemon } from 'src/app/state/pokemon/pokemon.action';
import { selectAllPokemonTeam, selectPokemon } from 'src/app/state/pokemon/pokemon.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  successMessage?:string;
  errorMessage?:string;
  pokemons:Pokemon[] = [];
  filteredPokemons:Pokemon[] = [];
  team:Pokemon[] = [];
  
  constructor(private pokemonsService:PokemonService,private store:Store<AppState>) { 
    this.store.pipe(select(selectAllPokemonTeam)).subscribe(
      team => this.team = team
    );
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getAllPokemons(){
    this.pokemonsService.getPokemons().subscribe(
      {
        next: (response) => {
          this.pokemons = response.results;
          this.filteredPokemons = response.results;
        },
        error: (error) => this.errorMessage = error,
        complete: () => console.info('pokemons fetched')
      }
    )
  }
  filterPokemonsByName(filterName:string) {
    this.filteredPokemons = this.pokemons.filter(function (str) { return str.name.includes(filterName); });
  }
  removePokemon(name:string){
    this.store.dispatch(removePokemon({pokemonName: name}));
    this.successMessage = 'Pokemon removed';    
  }
  addPokemon(pokemon:Pokemon){
    this.store.dispatch(addPokemon({pokemon:pokemon}))
    this.successMessage = "Pokemon Added";
  }
 
  errorEvent(errorMessage:string){
    this.errorMessage = errorMessage;
  }
}
