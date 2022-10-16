import { Pokemon } from "./pokemon"

export interface PokemonsRoot {
    count: number
    next: string
    previous: any
    results: Pokemon[]
}
