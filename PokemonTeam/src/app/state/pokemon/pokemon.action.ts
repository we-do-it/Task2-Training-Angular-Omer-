import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/interface/pokemon";

export const addPokemon = createAction(
    "Add pokemon to the team",
    props<{
        pokemon: Pokemon
    }>()
);

export const removePokemon = createAction(
    "Remove pokemon from the team",
    props<{ pokemonName: string }>()
);

export const selectPokemon = createAction(
    "Select Pokemon",
    props<{ pokemon: Pokemon }>()
)

export const setErrorMessage = createAction(
    "Set error message for alerts",
    props<{ message: string }>()
)
export const setSuccessMessage = createAction(
    "Set success message for alerts",
    props<{ message: string }>()
)
