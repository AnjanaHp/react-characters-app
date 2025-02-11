import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CharacterDetails() {

    const { characterId } = useParams();

    const [character, setCharacter] = useState(null);


    useEffect(() => {
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(e => console.log("Error getting character details from the API...", e));
    }, []);

    if (character === null) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <div className="box">
                <h2>{character.name}</h2>
                <p>Occupation: {character.occupation}</p>
                <p>Weapon: {character.weapon}</p>
                <p>Debt: {character.debt ? "Yes" : "No"}</p>
            </div>

            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    );
}
export default CharacterDetails;