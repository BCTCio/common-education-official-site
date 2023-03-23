import Link from 'next/link'

import { CheckIcon } from './CheckIcon'
import { Container } from './Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="text-4xl font-bold tracking-tight font-display text-slate-900">
          Empowering Dreams Through Education - Making a Difference in
          Underprivileged Children&apos; Lives
        </p>
        <p className="mt-4">
          Before exploring the world of educational philanthropy, many people
          might imagine that making a difference requires significant financial
          resources, influential connections, and countless hours spent
          navigating the complexities of the education system. But the Common
          Education Foundation (CEF) is here to show you otherwise.
        </p>
        <p className="mt-4">
          With CEF, you&apos;ll discover our commitment to bridging the
          education gap for underprivileged children in rural China. Our mission
          is to provide equal opportunities for quality education by connecting
          children in need with generous donors who can help fund their
          education-related expenses and in-school meals.
        </p>
        <p className="mt-4">
          By sponsoring a child&apos;s education, donors have the unique
          opportunity to create lasting bonds and foster a brighter future for
          these deserving young minds. Our dedicated team of professionals and
          volunteers work tirelessly to bring our mission to life and make a
          difference in the lives of children in rural China. Together, we can
          create a more equitable world through the power of education.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Bridge the education gap by sponsoring tuition fees for underprivileged children in rural China.',
            'Utilize our "cyber adoption" platform to enable donors to directly support a specific child\'s education.',
            'Facilitate school infrastructure improvements, ensuring access to safe and conducive learning environments.',
            'Organize mentorship programs and extracurricular activities to enhance personal development and social skills.',
            'Partner with local schools and educators to develop tailored curriculums that address the unique needs of rural communities.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="flex-none w-8 h-8 fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          At the Common Education Foundation, we believe that every child
          deserves access to quality education, regardless of their financial
          background. We work tirelessly to support underprivileged children in
          rural China by connecting them with generous donors who can help fund
          their education-related expenses and in-school meals. By bridging the
          gap between donors and children, we create lasting bonds and foster a
          brighter future for these deserving young minds.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Sponsor a child today
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
