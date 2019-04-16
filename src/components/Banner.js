import React, { Component } from "react"
import Image from "../Layout/image"
import "../CSS/Banner.css"
import "../CSS/Bulma.css"


class Banner extends Component {
    render(){
        return(
          <>
        <div className="banner ">
          <div className="contain columns is-gapless">
          <div className="banner-text column is-half">
            <div className="banner-text-center">
            <h1>Mes créations</h1>
            <p>Voici un site regroupant la plupart de mes créations à l'aide de nombreux languages.</p>
            <button class="button is-large">
                Découvrir
            </button>
            </div>
          </div>
          <div className="banner-img column is-half">
            <div className="banner-img-center">
              <Image />
            </div>
          </div>
          </div>
        </div>
        </>
      )}
    }



export default Banner