import RedirectIfNotLogged from "./RedirectIfNotLogged";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import React, {useState, useEffect} from "react";

const Game = () => {
    RedirectIfNotLogged();
    const {nickname} = useParams()
    const id = uuidv4();
    const [gameCreated, setGameCreated] = useState(false);


    useEffect(() => {
        console.log(nickname)
        console.log(gameCreated)
        if (!gameCreated) {
            // const createGame = async () => {
            try {
                console.log('test')
                fetch(`http://localhost:4200/${nickname}/game`, {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nickname: nickname,
                        id: id,
                        score: 0,
                    })
                });
                setGameCreated(true);

            } catch (error) {
                console.log(error);
            }
        }
    }, [gameCreated, nickname, id]);
}


export default Game