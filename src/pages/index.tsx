import Head from 'next/head'

import { Author } from '../components/Author'
import { Footer } from '../components/Footer'
import { FreeChapters } from '../components/FreeChapters'
import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import { Pricing } from '../components/Pricing'
import { Resources } from '../components/Resources'
import { Screencasts } from '../components/Screencasts'
import { TableOfContents } from '../components/TableOfContents'
import { Testimonial } from '../components/Testimonial'
import { Testimonials } from '../components/Testimonials'
import avatarImage1 from '../images/avatars/avatar-1.png'
import avatarImage2 from '../images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Common Education Foundation - Empowering Education for All
        </title>
        <meta
          name="description"
          content="At Common Education Foundation, we give children living in
          poverty around the world an equal opportunity to receive a quality
          education. Through public donations, we are able to provide children
          in need with the necessary resources and support services to ensure
          that they have the same access to educational opportunities as their
          more affluent peers. We believe that education is a fundamental right
          for all children and that no child should be denied the opportunity to
          reach their full potential. Join us in our mission to ensure that all
          children have access to a quality education!"
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          At Common Education Foundation, we give children living in poverty
          around the world an equal opportunity to receive a quality education.
          Through public donations, we are able to provide children in need with
          the necessary resources and support services to ensure that they have
          the same access to educational opportunities as their more affluent
          peers. We believe that education is a fundamental right for all
          children and that no child should be denied the opportunity to reach
          their full potential. Join us in our mission to ensure that all
          children have access to a quality education!
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
