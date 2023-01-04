import Leftbar from "../componants/leftbar/Leftbar"
import Navbar from "../componants/navbar/Navbar"
import Update from "../componants/update/Update"
import "./page.css"

function Page3() {
  return (
    <>
        <Navbar />
       
      <div className="con">
      <Leftbar />
        <Update />
       
      </div>
    </>
  )
}

export default Page3