export function Character({character}) {
  return (
    <div className="text-center p-5">
      <h2>{character.name}</h2>
      <h4>{character.status}</h4>
      <img className="img-fluid rounded-pill" src={character.image}></img>
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
    </div>
  );
}
