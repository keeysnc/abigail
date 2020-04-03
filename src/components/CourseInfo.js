import React, { useEffect, useRef } from "react"
import { Link } from "gatsby-plugin-intl"
import { TweenMax, TimelineLite, TimelineMax, Power3 } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

const CourseInfo = props => {
  let tl6 = new TimelineMax()
  let controller = new ScrollMagic.Controller()
  let courseInfo = useRef(null)
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
  useEffect(() => {
    TweenMax.to(courseInfo, 0, { css: { visibility: "visible" } })

    tl6.staggerFrom(
      [courseInfo],
      1.5,
      {
        y: 75,
        opacity: "0",
        ease: Power3.easeOut,
      },
      0.6
    )

    const scene = new ScrollMagic.Scene({
      triggerElement: "#stage",
      triggerHook: 0.1,
    })
      .setTween(tl6)
      .addTo(controller)
  })
  return (
    <div id="stage" className="section" ref={el => (courseInfo = el)}>
      <h4 dangerouslySetInnerHTML={{ __html: props.title }} />
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
      <Link to="/registration" class="waves-effect waves-light btn">
        Register
      </Link>
    </div>
  )
}

export default CourseInfo
