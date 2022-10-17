import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/interface/pokemon";
import { addPokemon, removePokemon, selectPokemon, setErrorMessage, setSuccessMessage } from "./pokemon.action";


export interface PokemonTeamState{
    pokemons: Pokemon[];
    selectedPokmon:Pokemon | null;
    errorMessage: string | null;
    successMessage: string | null;
}

export const initialState: PokemonTeamState ={
    pokemons:[],
    selectedPokmon: null,
    errorMessage:null,
    successMessage: null
 
}
export const pokemonTeamReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add new pokemon to the team
    on(addPokemon,(state,{pokemon})=>({
        ...state,
        pokemons: [...state.pokemons, pokemon],
        successMessage: "Pokemon added",
        errorMessage: null
    })),
    // Remove pokemon from the team
    on(removePokemon,(state,{pokemonName})=>({
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemonName !== pokemon.name),
        successMessage: "Pokemon revomed",
        errorMessage : null
    })),
    // Update selected pokemon
    on(selectPokemon,(state,{pokemon})=>({
        ...state,
        selectedPokmon:pokemon
    })),
    // Set errorMessage
    on(setErrorMessage,(state,{message})=>({
        ...state,
        errorMessage: message,
        successMessage: null
    })),
     // Set successMessage
     on(setSuccessMessage,(state,{message})=>({
        ...state,
        successMessage: message,
        errorMessage:null
        
    }))

)