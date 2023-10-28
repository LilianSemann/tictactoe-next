"use client"

import { useState } from "react"

export default function Home() {

  const [player, setPlayer] = useState("X")
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  function play(i: number) {
    
  }

  return (
    <section className="h-screen w-full flex flex-col justify-center items- bg-black">
      <table>
        <tbody>
          <tr>
            <td onClick={() => play(0)} className="w-[60px] h-[60px] text-2xl text-center border border-white text-black">{board[0]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[1]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[2]}</td>
          </tr>
          <tr>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[3]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[4]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[5]}</td>
          </tr>
          <tr>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[6]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[7]}</td>
            <td className="w-[60px] h-[60px] text-2xl text-center border border-white">{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}