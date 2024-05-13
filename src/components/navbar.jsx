import { Routes, Route, Link } from "react-router-dom"
import Home from "./home"
import Credentials from "./credentials"
import Projects from "./projects"
import Contact from "./contact"

export default function Navbar(){
    return (
        <div class="navbar-fixed">
      <nav class="nav-wrapper black">
        <div class="container">
          <a href="#" class="sidenav-trigger" data-target="mobile-menu"
            ><i class="fa-solid fa-bars"></i></a
          >
          <ul class="hide-on-med-and-down">
            <li><a href="#top-section">Home</a></li>
            <li><a href="#credentials">Credentials</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
        </div>
      </nav>

    </div>

    )
}