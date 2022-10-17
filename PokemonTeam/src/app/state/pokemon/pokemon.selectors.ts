import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PokemonTeamState } from "./pokemon.reducer";

export const selectPokemonTeam = (state: AppState) => state.pokemonTeam;
export const getPokemonnTeam = createSelector(
    selectPokemonTeam,
    (state: PokemonTeamState) => state.pokemons
)

export const selectPokemon = createSelector(
    selectPokemonTeam,
    (state: PokemonTeamState) => state.selectedPokmon
)

export const getSuccessMessage = createSelector(
    selectPokemonTeam,
    (state: PokemonTeamState) => state.successMessage
)

export const getErrorMessage = createSelector(
    selectPokemonTeam,
    (state: PokemonTeamState) => state.errorMessage
)