"use client"

import { useState } from "react"

export default function Home() {

  const [player, setPlayer] = useState("X")
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""])

  function play(index: number) {
    if (board[index] != "") return

    board[index] = player
    setboard([...board])
    setPlayer(player === "X" ? "O" : "X")
    check()
  }

  function check() {
    if (board[0] == board[1] && board[1] == board[2] && board[2] != "") alert("player " + player + " won!")
    if (board[3] == board[4] && board[4] == board[5] && board[5] != "") alert("player " + player + " won!")
    if (board[6] == board[7] && board[7] == board[8] && board[8] != "") alert("player " + player + " won!")
    if (board[0] == board[4] && board[4] == board[8] && board[8] != "") alert("player " + player + " won!")
    if (board[2] == board[4] && board[4] == board[6] && board[6] != "") alert("player " + player + " won!")
    if (board[0] == board[3] && board[3] == board[6] && board[6] != "") alert("player " + player + " won!")
    if (board[1] == board[4] && board[4] == board[7] && board[7] != "") alert("player " + player + " won!")
    if (board[2] == board[5] && board[5] == board[8] && board[8] != "") alert("player " + player + " won!")
  }

  return (
    <section className="h-screen w-full bg-black flex justify-center items-center">
      <table>
        <tbody>
          <tr>
            <td onClick={() => play(0)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[0]}</td>
            <td onClick={() => play(1)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[1]}</td>
            <td onClick={() => play(2)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => play(3)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[3]}</td>
            <td onClick={() => play(4)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[4]}</td>
            <td onClick={() => play(5)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => play(6)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[6]}</td>
            <td onClick={() => play(7)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[7]}</td>
            <td onClick={() => play(8)} className="border border-white h-[70px] w-[70px] text-white text-center text-4xl hover:bg-zinc-700 cursor-pointer">{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}