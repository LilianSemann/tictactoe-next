"use client"

import { useState } from "react"

export default function Home() {

  const shrek = {
    backgroundImage: "url(https://images.tcdn.com.br/img/img_prod/1119462/boneco_shrek_edicao_comemorativa_de_20_anos_estrela_173474830_3_d7daa37407e321f58b0d663dfee1f7f5.jpg)",
    backgroundSize: "cover"
  }

  const fiona = {
    background: "url(https://www.holdup.com.br/cdn/shop/products/meias-divertidas-fionna-meia-min_2000x.png?v=1599690666)",
    backgroundSize: "cover"
  }
  
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
            <td onClick={() => play(0)} style={board[0] == "X" ? shrek : (board[0] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(1)} style={board[1] == "X" ? shrek : (board[1] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(2)} style={board[2] == "X" ? shrek : (board[2] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
          </tr>
          <tr>
            <td onClick={() => play(3)} style={board[3] == "X" ? shrek : (board[3] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(4)} style={board[4] == "X" ? shrek : (board[4] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(5)} style={board[5] == "X" ? shrek : (board[5] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
          </tr>
          <tr>
            <td onClick={() => play(6)} style={board[6] == "X" ? shrek : (board[6] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(7)} style={board[7] == "X" ? shrek : (board[7] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
            <td onClick={() => play(8)} style={board[8] == "X" ? shrek : (board[8] == "O" ? fiona : {}) } className="w-[60px] h-[60px] border border-white text-3xl text-center hover:bg-zinc-800 text-white cursor-pointer"></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}