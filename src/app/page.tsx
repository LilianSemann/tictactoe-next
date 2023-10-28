"use client"

import { useState } from "react"

export default function Home() {

  const [player, setPlayer] = useState("X")
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ])

  function play(i: number, j: number) {
    if (board[i][j] !== "") {return}

    const newBoard = board.map((row, rowI) => 
      row.map((cell, colI) => {
        if (rowI === i && colI === j) {
          return player
        } else {
          return cell
        }
      }))

    setPlayer(player === "X" ? "O" : "X")
    setBoard(newBoard)    
  }

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <table>
        <tbody>
          {board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} onClick={() => play(i, j)} className="border border-white text-white h-[60px] w-[60px] text-3xl text-center hover:bg-zinc-900 cursor-pointer">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}