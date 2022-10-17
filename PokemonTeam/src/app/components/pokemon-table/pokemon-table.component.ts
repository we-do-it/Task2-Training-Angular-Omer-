import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { AppState } from 'src/app/state/app.state';
import { selectPokemon, setErrorMessage } from 'src/app/state/pokemon/pokemon.action';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  @Input() allActions: boolean = false;
  @Output() removeEvent = new EventEmitter<string>();

  constructor(private store: Store<AppState>, private pokemonsService: PokemonService) { }

  ngOnInit(): void {
  }
  selectPokemon(name: string) {
    this.pokemonsService.getPokemonByName(name).subscribe(
      {
        next: (response) => {
          let pokemon = response;
          this.store.dispatch(selectPokemon({ pokemon: pokemon }));
        },
        error: (error) => {
          this.store.dispatch(setErrorMessage({ message: error }));
        },
        complete: () => console.info('pokemon fetched')
      }
    );

  }

  remove(name: string) {
    this.removeEvent.emit(name);
  }


}
