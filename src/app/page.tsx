"use client"

import Image from "next/image"
import { useState } from "react"

export default function Home() {

  const [player, setPlayer] = useState("First")
  const [board, setboard] = useState(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]) 
  const [won, setWon] = useState("no")

  function play(index: number) {
    if (board[index] != "Null") return

    board[index] = player
    setboard([...board])
    setPlayer(player === "First" ? "Second" : "First")
    if (won == "yes") setWon("no")
    check()
  }

  function check() {
    const audio = document.querySelectorAll('audio')
    
    if (board[0] == board[1] && board[0] == board[2] && board[0] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return} 
    if (board[3] == board[4] && board[3] == board[5] && board[3] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[6] == board[7] && board[6] == board[8] && board[6] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[0] == board[4] && board[0] == board[8] && board[0] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[2] == board[4] && board[2] == board[6] && board[2] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[0] == board[3] && board[3] == board[6] && board[6] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[1] == board[4] && board[4] == board[7] && board[7] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}
    if (board[2] == board[5] && board[5] == board[8] && board[8] != "Null") {audio[1].play(); setWon("yes"); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"]); setPlayer("First"); return}

    if (board[0] != "Null" && board[1] != "Null" && board[2] != "Null" && board[3] != "Null" && board[4] != "Null" && board[5] != "Null" && board[6] != "Null" && board[7] != "Null" && board[8] != "Null") {
       audio[0].play(); setboard(["Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null", "Null"])}
  }
    
  return (
    <section className={`${won}`}>
      <Image
        src={'/title.png'}
        alt="title"
        width={409}
        height={149}
        className="mt-4"
      />
      <table className="mt-4">
        <tbody>
          <tr>
            <td onClick={() => play(0)} className={`${board[0]}`}></td>
            <td onClick={() => play(1)} className={`${board[1]}`}></td>
            <td onClick={() => play(2)} className={`${board[2]}`}></td>
          </tr>
          <tr>
            <td onClick={() => play(3)} className={`${board[3]}`}></td>
            <td onClick={() => play(4)} className={`${board[4]}`}></td>
            <td onClick={() => play(5)} className={`${board[5]}`}></td>
          </tr>
          <tr>
            <td onClick={() => play(6)} className={`${board[6]}`}></td>
            <td onClick={() => play(7)} className={`${board[7]}`}></td>
            <td onClick={() => play(8)} className={`${board[8]}`}></td>
          </tr>
        </tbody>
      </table>
      <audio src="/gameover.mp3"/>
      <audio src="/win.mp3"/>
    </section>
  )
}