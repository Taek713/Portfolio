import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
   <div>
  <nav className="side">
    <div className="side__inner">
      <div className="top"><a href="#">Tae kim</a></div>
      <div className="bottom">
        {/* <a href="https://dribbble.com/hellovolker">DRIBBBLE</a> */}
        <a href="https://twitter.com/SeoulFed">TWITTER</a>
        <a href="mailto:teakim12@gmail.com">EMAIL ME</a>
      </div>
    </div>
  </nav>
  <section className="section section--hello" id="hello">
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#intro"><span>#0</span>Hello</a>
        <h2>Hello You</h2>
        <ul className="anchornav">
          <li><a href="#intro">Intro <span>#1 What's going on?</span></a></li>
          <li><a href="#about">About <span>#2 Who am I?</span></a></li>
          <li><a href="#clients">Clients <span>#3 Who do I work for?</span></a></li>
          <li><a href="#portfolio">Portfolio <span>#4 What I do?</span></a></li>
          <li><a href="#contact">Contact <span>#5 Write a message</span></a></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="section section--intro" id="intro">
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#intro"><span>#1</span>Intro</a>
        <h1>Tae Kim is a<br />
          Full-stack Developer<br />
          based in<br />
         Detroit.</h1>
        <p className="lead">
          See small bits of my work and a full resume on <a href="#" className="link">Linkedin</a>, and quick thoughts on <a href="https://twitter.com/Seoulfed" className="link">Twitter</a>.
        </p>
      </div>
    </div>
  </section>
  <section className="section section--about" id="about">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
      <polygon points="100 0 100 10 0 10" />
    </svg>
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#about"><span>#2</span>Building</a>
        <h2>I work for companies and agencies that creates responsive web applications, programs and designs.</h2>
        <p className="lead">Building the right foundation to ongo optimization and support. In short, I try to make the web a better place.</p>
      </div>
    </div>
  </section>
  <section className="section section--clients" id="clients">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
      <polygon points="100 10 0 0 0 10" />
    </svg>
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#clients"><span>#3</span>Clients</a>
        <h2>I also work with corporations, institutions and startups in a wide range of industries.</h2>
        <p className="lead">Here are some of my clients, he has had the pleasure working with:</p>
      </div>
    </div>
  </section>
  <section className="section section--portfolio1" id="portfolio">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 100 C 20 0 50 0 100 100 Z" />
    </svg>
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#portfolio"><span>#4</span>Portfolio</a>
        <h2>Portfolio Item #1</h2>
        <p className="lead">Here are some of his clients, he has had the pleasure working with.</p>
      </div>
    </div>
  </section>
  <section className="section section--portfolio" id="portfolio2">
    <div className="section__inner">
      <div className="block">
        <h2>Portfolio Item #2</h2>
        <p>Descripton of said portfolio item.</p>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height={100} viewBox="0 0 100 102" preserveAspectRatio="none" className="bottom">
      <path d="M0 0 L50 100 L100 0 Z" />
    </svg>
  </section>
  <section className="section section--contact" id="contact">
    <div className="section__inner">
      <div className="block">
        <a className="pre" href="#contact"><span>#5</span>Get in touch</a>
        <h2>For work inquiries<br />please email:<br />
          <span><a href="mailto:Teakim12@gmail.com">Teakim12@gmail.com</a></span></h2>
        <p className="lead">More links:  <a href="https://twitter.com/Seoulfed">Twitter</a> and <a href="https://www.linkedin.com/in/tae-kim-b38a01ba/">Linkedin</a>.</p>
      </div>
    </div>
  </section>
</div>

  </Layout>
)

export default IndexPage
