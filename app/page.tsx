import Link from "next/link"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Service from "./service/page"
import AboutUs from "./aboutus/page"



export default function HomePage(){
return (
  <div>

    <Footer></Footer>
    <Header></Header>
  <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded">this is my first HomePage</h1>
  <h2 className="my-1.5 bg-gradient-to-r from-yellow-500 to-green-500 font-bold leading-8 text-center text-lg">first heading</h2>
  <p className="text-sm bg-gradient-to-r from-blue-300 to-red-300 ">I am making my 3rd assignment and it has component, header,footer and many more.</p>
  <h2 className="bg-gradient-to-r from-red-500 to-gray-200 text-center leading-8 font-bold my-1.5 text-lg">second heading</h2>
  <p className="text-sm bg-gradient-to-r from-blue-300 to-red-300">this is bilal hussain</p>
  <h3 className="font-bold leading-8 text-center text-lg bg-gradient-to-br from-red-500 to-yellow-500 my-1.5 ">third heading</h3>
  <p className="text-sm bg-gradient-to-r from-blue-300 to-red-300">i am learning nextjs and tailwind css</p>


<div>
  <ul>
    <li><Link className="bg-slate-400 " href="./service">service</Link></li>
    <li><Link className="bg-slate-400" href="./aboutus">aboutus</Link></li>
  </ul>
</div>

  </div>

)
}