import '../App.css'

const ListItem = (props) => {
console.log(props);
    return(
        <div className = 'container'>
            <div className = 'col-a'>
                {props.characterList.map((character) => <p key={character.id}>{character.name}</p>)}
            </div>
            <div className = 'col-b'>
                {props.characterList.map(character => <p key={character.id}>{character.height}</p>)}
            </div>
            <div className = 'col-c'>
                {props.characterList.map(character => <p key={character.id}>{character.mass}</p>)}
            </div>
        </div>
    )
}
export default ListItem