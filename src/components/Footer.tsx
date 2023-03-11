import { GridPattern } from './GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-sm text-center text-slate-600">
        <p>
          Copyright &copy; {new Date().getFullYear()} Common Education
          Foundation, A Registered Non-Profit 503c. Organization
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}