import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>

        <div class="inner">
          <ul class="icons">
            <li><a href="https://twitter.com/masia02" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/masia02" class="icon brands fa-facebook"><span class="label">facebook</span></a></li>
            <li><a href="https://www.instagram.com/masia02" class="icon brands fa-instagram"><span class="label">instagram</span></a></li>
            <li><a href="https://www.youtube.com/user/masia02?sub_confirmation=1" class="icon brands fa-youtube"><span class="label">Youtube</span></a></li>
            <li><a href="https://line.me/R/ti/p/%40zkz7445k" class="icon brands fa-line"><span class="label">LINE</span></a></li>
            <!--<li><a href="https://www.pinterest.jp/masia02/" class="icon brands fa-pinterest"><span class="label">pinterest</span></a></li>
            <li><a href="https://www.linkedin.com/in/masia02/" class="icon brands fa-linkedin"><span class="label">linkedin</span></a></li>-->
            <li><a href="https://github.com/masia02" class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a href="https://medium.com/@masia02" class="icon brands fa-medium"><span class="label">medium</span></a></li>
            <li><a href="https://t.me/masia02" class="icon brands fa-telegram"><span class="label">Telegram</span></a></li>
            <!--<li><a href="https://docs.google.com/forms/d/1K_5CLkxwGKiMjkfoeKc6RwkUEdGA81NPWIvN0usbWvg/viewform?edit_requested=true" class="icon solid fa-envelope"><span class="label">Email</span></a></li>-->
          </ul>
          <ul class="copyright">
            <li>&copy; <a href="https://cipher-web.com">CipherWeb LLC</a></li><li>ENS: masia02.eth</li>
          </ul>
        </div>

        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}
