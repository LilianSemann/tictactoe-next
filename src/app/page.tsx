"use client"

import { useState } from "react"

export default function Home() {
  
    const [player, setPlayer] = useState("X")
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

    function play(index: number) {
      if (board[index] != "") return

      board[index] = player

      setPlayer(player == "X" ? "O" : "X")
      setBoard([...board])
      check()
    }

    function check() {
      if (board[0] == board[1] && board[0] == board[2] && board[0] != "") alert("player " + player + " won!")
      if (board[3] == board[4] && board[3] == board[5] && board[3] != "") alert("player " + player + " won!")
      if (board[6] == board[7] && board[6] == board[8] && board[6] != "") alert("player " + player + " won!")
      if (board[0] == board[4] && board[0] == board[8] && board[0] != "") alert("player " + player + " won!")
      if (board[2] == board[4] && board[2] == board[6] && board[2] != "") alert("player " + player + " won!")
      if (board[0] == board[3] && board[3] == board[6] && board[6] != "") alert("player " + player + " won!")
      if (board[1] == board[4] && board[4] == board[7] && board[7] != "") alert("player " + player + " won!")
      if (board[2] == board[5] && board[5] == board[8] && board[8] != "") alert("player " + player + " won!")
    }

    return (
    <section className="h-screen w-full bg-black flex justify-center items-center">
      <table>
        <tbody>
          <tr>
            <td onClick={() => play(0)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[0]}</td>
            <td onClick={() => play(1)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[1]}</td>
            <td onClick={() => play(2)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => play(3)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[3]}</td>
            <td onClick={() => play(4)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[4]}</td>
            <td onClick={() => play(5)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => play(6)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[6]}</td>
            <td onClick={() => play(7)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[7]}</td>
            <td onClick={() => play(8)} className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer">{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}