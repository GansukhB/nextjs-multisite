import Navbar1 from "./navbars/Navbar1"
import Navbar2 from "./navbars/Navbar2"
import Navbar3 from "./navbars/Navbar3"

export default function ({siteId}: {siteId: number}){

    return (
        <div>
            {siteId === 1 && <Navbar1 />}
            {siteId === 2 && <Navbar2 />}
            {siteId === 3 && <Navbar3 />}
        </div>
    )
}