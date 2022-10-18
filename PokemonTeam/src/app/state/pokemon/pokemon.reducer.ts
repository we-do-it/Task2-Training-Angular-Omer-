import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/interface/pokemon";
import { addPokemon, removePokemon, selectPokemon, setErrorMessage, setSuccessMessage } from "./pokemon.action";


export interface PokemonTeamState{
    pokemons: Pokemon[];
    selectedPokmon:Pokemon | undefined;
    errorMessage: string | undefined;
    successMessage: string | undefined;
}

export const initialState: PokemonTeamState ={
    pokemons:[],
    selectedPokmon: undefined,
    errorMessage:undefined,
    successMessage: undefined
 
}
export const pokemonTeamReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add new pokemon to the team
    on(addPokemon,(state,{pokemon})=>({
        ...state,
        pokemons: [...state.pokemons, pokemon],
        successMessage: "Pokemon added",
        errorMessage: undefined
    })),
    // Remove pokemon from the team
    on(removePokemon,(state,{pokemonName})=>({
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemonName !== pokemon.name),
        successMessage: "Pokemon removed",
        errorMessage : undefined
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
        successMessage: undefined
    })),
     // Set successMessage
     on(setSuccessMessage,(state,{message})=>({
        ...state,
        successMessage: message,
        ƒerrorMessage:undefined
        
    }))

)