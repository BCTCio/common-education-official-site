import Image from 'next/image'

import { Button } from './Button'
import { GridPattern } from './GridPattern'
import { StarRating } from './StarRating'
import coverImage from '../images/cover.jpeg'

function Testimonial() {
  return (
    <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="text-xl font-medium font-display text-slate-900">
          Common Education Foundation - Empowering Education for All
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          Stacey Solomon
        </strong>
        , Founder at Retail Park
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 flex w-64 mx-auto shadow-xl rounded-xl bg-slate-600 md:w-80 lg:w-full">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-extrabold font-display text-slate-900 sm:text-6xl">
              <span className="text-blue-600 underline-offset-8">
                Common Education
              </span>{' '}
              Foundation
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Bridging the Education Gap, One Child at a Time
            </p>
            <div className="flex gap-4 mt-8">
              <Button href="#free-chapters" color="blue">
                Read our story
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Donate today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
