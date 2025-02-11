import { useParams } from "react-router-dom";



function CharacterDetails(){

    const {characterId} = useParams();
    return(
        <h2> Character with id.... {characterId} </h2>
    );
}
export default CharacterDetails;