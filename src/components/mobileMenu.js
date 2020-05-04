import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import NavMenu from "./navMenu"

import "./mobileMenu.css"

const MobileMenu = props => {
  const intl = useIntl()

  return (
    <div className="mobile-menu-container">
      <div className="container">
        <svg className="mobile-exit" width="37" height="37" viewBox="0 0 37 37">
          <defs>
            <clipPath id="clip-path">
              <rect width="15.557" height="15.557" fill="none" />
            </clipPath>
          </defs>
          <g id="Group_11" data-name="Group 11" transform="translate(-301 -32)">
            <g id="Group_6" data-name="Group 6" transform="translate(0 8)">
              <g id="Backward" transform="translate(301 60.571) rotate(-90)">
                <rect
                  id="Rectangle_1073"
                  data-name="Rectangle 1073"
                  width="37"
                  height="37"
                  rx="10"
                  transform="translate(-0.429)"
                  fill="#e4f2ef"
                />
              </g>
            </g>
            <g
              id="Cancel"
              transform="translate(312 43)"
              clip-path="url(#clip-path)"
            >
              <path
                id="Union_3"
                data-name="Union 3"
                d="M7.778,9.192,1.414,15.557,0,14.142,6.364,7.778,0,1.414,1.414,0,7.778,6.364,14.142,0l1.415,1.414L9.192,7.778l6.364,6.364-1.415,1.415Z"
                fill="#00b37b"
              />
            </g>
          </g>
        </svg>

        <NavMenu
          home={intl.formatMessage({
            id: "home.menu_items.home",
          })}
          about={intl.formatMessage({
            id: "home.menu_items.about",
          })}
          services={intl.formatMessage({
            id: "home.menu_items.services",
          })}
          driversImp={intl.formatMessage({
            id: "home.menu_items.drivers_imp",
          })}
          registration={intl.formatMessage({
            id: "home.menu_items.registration",
          })}
          faq={intl.formatMessage({
            id: "home.menu_items.faq",
          })}
          training={intl.formatMessage({
            id: "home.menu_items.training",
          })}
        />
      </div>
    </div>
  )
}

export default MobileMenu
