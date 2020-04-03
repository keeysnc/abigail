import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TweenMax, TimelineLite, TimelineMax, Power3 } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

import "./paragraphSection.css"

const Paragraph = props => {
  let tl3 = new TimelineMax()
  let controller = new ScrollMagic.Controller()
  let paragraph = useRef(null)
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
  useEffect(() => {
    const paraTitle = paragraph.children[0]
    const paraText = paragraph.children[1]
    TweenMax.to(paraTitle, 0, { css: { visibility: "visible" } })
    TweenMax.to(paraText, 0, { css: { visibility: "visible" } })

    tl3.staggerFrom(
      [paraTitle, paraText],
      1.5,
      {
        y: 75,
        opacity: "0",
        ease: Power3.easeOut,
      },
      0.2
    )

    const scene = new ScrollMagic.Scene({
      triggerElement: "#stage",
      triggerHook: 0.8,
    })
      .setTween(tl3)
      .addTo(controller)
  })
  return (
    <div id="stage" className="paragraph section" ref={el => (paragraph = el)}>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
    </div>
  )
}

export default Paragraph
