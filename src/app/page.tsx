"use client"

import { useState } from "react"

export default function Home() {

  const [ player, setPlayer ] = useState("url(https://images.tcdn.com.br/img/img_prod/1119462/boneco_shrek_edicao_comemorativa_de_20_anos_estrela_173474830_3_d7daa37407e321f58b0d663dfee1f7f5.jpg)")
  const [ board, setBoard ] = useState(["", "", "", "", "", "", "", "", ""])

  function mark(index: number) {
    board[index] = player
    setBoard([...board])
    setPlayer(player == "url(https://images.tcdn.com.br/img/img_prod/1119462/boneco_shrek_edicao_comemorativa_de_20_anos_estrela_173474830_3_d7daa37407e321f58b0d663dfee1f7f5.jpg)" ? "https://m.media-amazon.com/images/I/41lRBgcsJAS._AC_UF894,1000_QL80_.jpg" : "url(https://images.tcdn.com.br/img/img_prod/1119462/boneco_shrek_edicao_comemorativa_de_20_anos_estrela_173474830_3_d7daa37407e321f58b0d663dfee1f7f5.jpg)")
  }

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <table>
        <tbody>
          <tr>
            <td style={{background: board[0]}} onClick={() => mark(0)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[1]}} onClick={() => mark(1)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[2]}} onClick={() => mark(2)} className="border border-black w-[100px] h-[100px]"></td>
          </tr>
          <tr>
            <td style={{background: board[3]}} onClick={() => mark(3)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[4]}} onClick={() => mark(4)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[5]}} onClick={() => mark(5)} className="border border-black w-[100px] h-[100px]"></td>
          </tr>
          <tr>
            <td style={{background: board[6]}} onClick={() => mark(6)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[7]}} onClick={() => mark(7)} className="border border-black w-[100px] h-[100px]"></td>
            <td style={{background: board[8]}} onClick={() => mark(8)} className="border border-black w-[100px] h-[100px]"></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}