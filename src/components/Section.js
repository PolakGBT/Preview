import React, { Component } from "react"
import "../CSS/Section.css"
import "../CSS/Bulma.css"
import Imagetheme from "../Layout/image-theme"



class Section extends Component {
    render(){
        return(
            <>
        <div className="sectionn">
         <div className="columns is-gapless section-part">
            <div className="column is-two-fifths section-img">
                <div className="section-img-center">
                    <div className="section-border">
                    <Imagetheme props={"Theme1.png"}/>
                    </div>
                </div>
            </div>
            <div className="column auto section-text">
                <div className="section-text-center">
                    <h1>MON PORTOFLIO</h1>
                    <p>Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot dierum defueris tempus, reverteris ad paria perferenda, nec ubi esses interrogatus et quo tandem miser discesseris, aetatem omnem frustra in stipite conteres summittendo.</p>
                </div>
            </div>
         </div>
        </div>
        </>
      )}
    }



export default Section