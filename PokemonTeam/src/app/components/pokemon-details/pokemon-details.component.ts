import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { AppState } from 'src/app/state/app.state';
import { addPokemon } from 'src/app/state/pokemon/pokemon.action';
import { selectPokemon } from 'src/app/state/pokemon/pokemon.selectors';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  
  pokemon?:Pokemon | null;
  @Output() addPokemonEvent = new EventEmitter<Pokemon>();
  constructor(private store:Store<AppState>,private pokemonsService: PokemonService) { }

  ngOnInit(): void {
    this.store.pipe(select(selectPokemon)).subscribe(
      pokemon => this.pokemon = pokemon
    );
   
  }
  addPokemon(){
    this.addPokemonEvent.emit(this.pokemon!);
  }

}
