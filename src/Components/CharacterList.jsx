import { useState, useEffect } from "react";
import { Character } from "./Character";
import { NavigationBar } from "./NavigationBar";

export function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1)

  useEffect(() => {
    async function getCharacters() {
      const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await result.json();
      setLoading(false);
      setCharacter(data.results);
    }
    getCharacters();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <NavigationBar page={page} setPage={setPage}/>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {character.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavigationBar page={page} setPage={setPage}/>
    </div>
  );
}
