import Preview from "./preview"
import Aboutus from "./abousUs"
import Bestadmins from "./bestAdmins"
import Transition from "./transition"
import News from "./news"
import { data } from "../data"

export default function Main() {
    return (
        <>
           <Preview {...data[2]} />
           <Aboutus {...data[3]} />
           <Bestadmins {...data[4]} />
           <Transition {...data[5]} />
           <News {...data[6]} />
        </>
    )
}