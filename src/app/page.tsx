"use client"

export default function Home() {

  let player = "X"
  let table = ["", "", "", "", "", "", "", "", ""]

  function play(index: number) {
    if (table[index] !== "") return
    
    table[index] = player
    player = player == "X" ? "O" : "X"

    render()
  }

  function render() {
    let tds = document.querySelectorAll("td")

    tds.forEach((td, index) => {
      td.innerHTML = table[index]
    });

  }

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-2">
      <h2>TicTacToe 3</h2>
      <table>
        <tbody>
          <tr>
            <td onClick={() => play(0)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(1)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(2)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
          </tr>
          <tr>
            <td onClick={() => play(3)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(4)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(5)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
          </tr>
          <tr>
            <td onClick={() => play(6)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(7)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
            <td onClick={() => play(8)} className="w-[60px] h-[60px] text-center border border-black hover:bg-lime-100 text-3xl cursor-pointer"></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}