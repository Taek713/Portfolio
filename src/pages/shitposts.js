import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import $ from "jquery";
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
        <a className="pre" href="/index"><span>#0</span>Hello</a>
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

    <div class="logo"><b>T<span>A</span>E</b></div>

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
  <div className="blog">
  
  <div className="blog-header blog-is-sticky">
    <div className="blog-article header-article">
      <div className="blog-big__title">Self</div>
      <div className="blog-menu rounded small-title">Pinned Issue Identifiers</div>
    </div>
    <div className="blog-article page-number">
      NO. 01
    </div>
  </div>
  <div className="blog-header-container">
    <div className="blog-header">
      <div className="blog-article header-article">
        <div className="blog-big__title">Esteem</div>
        <div className="blog-menu small-title date">1.19.22</div>
      </div>
      <div className="blog-article">
        <img src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt />
        <h2>I dont Hate Love.. <span>Love</span> is just not for me.</h2>
        <div className="blog-detail">
          <span>By Tae Kim</span>
          <span>5 Min Read</span>
        </div>
        <p>No Love Lost, I just cant Love you anymore...</p>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </a>
      </div>
    </div>
    <div className="blog-header">
      <div className="blog-article header-article">
        <div className="blog-big__title">Love</div>
        <div className="blog-menu small-title date">1.19.22</div>
      </div>
      <div className="blog-article">
        <img src="https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt />
        <h2>Talking About <span>Vulnerability</span> During Love</h2>
        <div className="blog-detail">
          <span>By Tae Kim</span>
          <span>5 Min Read</span>
        </div>
        <p>Having traveled a few places, Love just is'nt ideal anywhere.</p>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </a>
      </div>
    </div>
    <div className="blog-header">
      <div className="blog-article header-article">
        <div className="blog-big__title">Control</div>
        <div className="blog-menu small-title date">1.19.22</div>
      </div>
      <div className="blog-article">
        <img src="https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt />
        <h2>How Love Changed my<span>Understanding</span> Of life</h2>
        <div className="blog-detail">
          <span>By Tae Kim</span>
          <span>Infinite Min Read</span>
        </div>
        <p>Love is defined and the undefined continues progress, with leaves me praising the Ocean's perspective</p>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </a>
      </div>
    </div>
  </div>
  <div className="blog-part right-blog">
    <marquee width="100%" direction="left">
      <span>Now And Then You Miss Her</span>
      <span>But, Its Time To Move On</span>
      <span>Leave Your Heart at The Door...</span>
    </marquee>
    <div className="blog-right-title-container">
      <div className="blog-right-title">
        Featured Articles
      </div>
      <div className="blog-menu rounded">See All</div>
    </div>
    <div className="blog-right">
      <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">1</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">Leave Your Old Life Behind</div>
        <div className="blog-right-page-subtitle">Continue to grow, thats all that matters..</div>
      </div>
      <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">2</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">Don't try to be your old self</div>
        <div className="blog-right-page-subtitle">Always grow. Stay True To Yourself.</div>
      </div>
      <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">3</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">Fuck Love</div>
        <div className="blog-right-page-subtitle">The interior concept of the heart, in my case it is hollow, try to match mine...</div>
      </div>
      <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">4</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">Some Things End</div>
        <div className="blog-right-page-subtitle">When it does, just appreciate, what was, and dont look back, you'll hurt yourself even more...</div>
      </div>
      {/* <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">5</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite</div>
        <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
      </div> */}
      <div className="blog-right-container">
        <div className="blog-title-date">
          <div className="blog-right-page">5</div>
          <div className="date">1.19.22</div>
        </div>
        <div className="blog-right-page-title">What Happens When You Leave Your Old life Behind</div>
        <div className="blog-right-page-subtitle">You Grow, Become a Watered Plant, and you'll be sprouting...</div>
      </div>
      <div className="circle">
        <div className="circle-title">Leave Your Old Life Behind</div>
        <div className="circle-subtitle">Don't try to be your old self, always grow. Stay True To Yourself.</div>
        <div className="circle-footer">Experience Life.</div>
      </div>
    </div>
  </div>
</div>

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
