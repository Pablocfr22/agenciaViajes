import React from "react"
import '../css/PageTours.css'
import SectionMaravillate from "./SectionMaravillate"
import SectionDisfruta from "./SectionDisfruta"
import SectionConectate from "./SectionConectate"

function PageTours(){
    return(
        <div className="PageTour">
            <SectionMaravillate/>
            <SectionDisfruta/>
            <SectionConectate/>
        </div>
    )
}
export default PageTours