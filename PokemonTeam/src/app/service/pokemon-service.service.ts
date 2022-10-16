import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interface/pokemon';
import { PokemonsRoot } from '../interface/pokemon-root';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {

  }

  getPokemons(): Observable<PokemonsRoot> {
    return this.http.get<PokemonsRoot>(`${this.baseUrl}/pokemon?limit=151`)
  }
  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`)
  }
}
