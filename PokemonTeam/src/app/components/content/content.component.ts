import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { AppState } from 'src/app/state/app.state';
import { addPokemon, removePokemon, setErrorMessage } from 'src/app/state/pokemon/pokemon.action';
import { selectAllPokemonTeam, selectPokemon } from 'src/app/state/pokemon/pokemon.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

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
        error: (error) => this.store.dispatch(setErrorMessage({message:error})),
        complete: () => console.info('pokemons fetched')
      }
    )
  }
  filterPokemonsByName(filterName:string) {
    this.filteredPokemons = this.pokemons.filter(function (str) { return str.name.includes(filterName); });
  }
  removePokemon(name:string){
    this.store.dispatch(removePokemon({pokemonName: name}));  
  }
  addPokemon(pokemon:Pokemon){
   if(this.team.length < 5){
    this.store.dispatch(addPokemon({pokemon:pokemon}))
   }else this.store.dispatch(setErrorMessage({message: 'Your team cannot have more than 6 pokemons'}))
  }
 
}
