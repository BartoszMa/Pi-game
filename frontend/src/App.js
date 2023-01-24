import "./App.css"
import React from "react";
import {Route, Routes} from "react-router-dom"
import Registration from "./components/Registration"
import Login from "./components/Login"
import Start from "./components/Start"
import Home from "./components/Home"
import Game from "./components/Game"
import Chat from "./components/Chat"
import Leaderboard from "./components/Leaderboard"


export default function App() {
    return (
        <div className="flex flex-col">
            <h1 className="mx-auto font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">&#120703; Game</h1>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/:nickname/home" element={<Home/>}/>
                <Route path="/:nickname/game" element={<Game/>}/>
                <Route path="/:nickname/chat" element={<Chat/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
            </Routes>
        </div>
    )
}
