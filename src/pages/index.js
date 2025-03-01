import { useState } from "react"
import Link from "next/link";


function App() {
  const [numb,setnumb]  = useState(0)
  return (
    <>
      <div>
      hello class {numb}numb
    </div>
    <button onClick={() => setnumb(numb + 1)}>Add</button>
    <Link href="/About">about us</Link>
    </>
  )
}

export default App
