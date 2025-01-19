import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
    query GetPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            image
            types
            evolutions {
                id
                name
            }
            attacks {
                fast {
                    name
                    damage
                }
                special {
                    name
                    damage
                }
            }
        }
    }
`;

export const GET_POKEMON_LIST = gql`
  query GetPokemonList {
    pokemons(first: 20) {
      id
      name
      image
      types
    }
  }
`;