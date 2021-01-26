import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className ="social-wrapper">
      <h2>Social Media Handles</h2>
      <a
       href ="https://youtube.com" className ="youtube social"
       >
       <FontAwesomeIcon icon = {faYoutube} size="2x" />
      </a>

      <a
       href ="https://twitter.com" className ="twitter social"
       >
       <FontAwesomeIcon icon = {faTwitter} size="2x" />
      </a>

      <a
       href ="https://instagram.com" className ="instagram social"
       >
       <FontAwesomeIcon icon = {faInstagram} size="2x" />
      </a>

      <a
       href ="https://github.com" className ="github social"
       >
       <FontAwesomeIcon icon = {faGithub} size="2x" />
      </a>

    </div>
  )
}

export default Socials;