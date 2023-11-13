import { useState } from "react";

export default function Player ({initialName,symbol,isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName);
   const [ isEditting, setIsEditting] = useState(false);

   function handleEditClick() {
    setIsEditting(!isEditting);
    if(isEditting){
      onChangeName(symbol,playerName);
    }
   
   }
   function handleChange (event) {
      setPlayerName(event.target.value);
   }
   let editableplayerName =  <span className="player-name"> {playerName} </span>
   if(isEditting) {
    editableplayerName = <input type="text" required Value={playerName}  onChange={handleChange}/>
   }
    return (

        <li className={isActive ? 'active' : undefined}>
        <span className="player" >
        {editableplayerName}
        <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={handleEditClick} >{isEditting ? 'save' : 'Edit'}</button>
      </li>
    );  
}



