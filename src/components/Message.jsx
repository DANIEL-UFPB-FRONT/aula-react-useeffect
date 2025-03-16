import { useEffect, useState } from "react";
import "./Message.css"

function Message() {
    
    const [message, setMessage] = useState("")
    const [count, setCount] = useState(0)
    const [pokemonList, setPokemonList] = useState([]);

    async function fetchPokemon() {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          const data = await response.json();
          setPokemonList(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

    useEffect(() => {
      console.log("Listen to message - Setup code")
      console.log("New message: ", message)
      return () => {
        // A good example here: https://react.dev/reference/react/useEffect#examples-connecting
        console.log("Listen to message - Cleanup code") 
        console.log("Old message: ", message)
      }
    }, [message]);

    // useEffect(() => {
    //     console.log("Listen to count - Setup code")
    //     console.log("Count: ", count)

    //     return () => {
    //       console.log("Listen to count - Cleanup code")
    //         console.log("Old count: ", count)
    //     }
    // }, [count]);

    // useEffect(() => {
    //     console.log("Getting pokemon list...")
    //     fetchPokemon()
    // }, []);

    return (
        <div id='message-box'>
            <h2>Type a message!</h2>
            <input type="text" placeholder="Type a message" onInput={(e) => setMessage(e.target.value)}></input>
            <span>Typed message: {message}</span>
            <button id='b1' onClick={() => setCount(prev => prev + 1)}>Click count: {count}</button>
            <h2>List of Pokémon:</h2>
            <ul>
                {pokemonList.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default Message