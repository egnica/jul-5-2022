const ListItem = (props) => {
console.log(props);
    return(
        <div>
        
            {props.characterList.map((character) => <p key={character.id}>{character.name}</p>)}
            
        </div>
    )
}
export default ListItem