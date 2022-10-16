import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/interface/pokemon";
import { addPokemon, removePokemon, selectPokemon } from "./pokemon.action";


export interface PokemonTeamState{
    pokemons: Pokemon[];
    selectedPokmon:Pokemon | null
}

export const initialState: PokemonTeamState ={
    pokemons:[],
    selectedPokmon: null
 
}
export const pokemonTeamReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add new pokemon to the team
    on(addPokemon,(state,{pokemon})=>({
        ...state,
        pokemons: [...state.pokemons, pokemon]
    })),
    // Remove pokemon from the team
    on(removePokemon,(state,{pokemonName})=>({
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemonName !== pokemon.name)
    })),
    // Update selected pokemon
    on(selectPokemon,(state,{pokemon})=>({
        ...state,
        selectedPokmon:pokemon
    }))

)