"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
]

export default function SimpleCenteredWithBackgroundImage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 font-[var(--font-display)]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mudit Gupta</span>
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-emerald-400 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm/6 font-semibold text-white hover:text-emerald-400 transition-colors">
              Contact <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Mudit Gupta</span>
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MG</span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-emerald-500" />
                <path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-emerald-600 to-emerald-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm/6 text-gray-300 ring-1 ring-emerald-500/20 hover:ring-emerald-500/40 transition-all duration-300 bg-emerald-500/5">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available for new opportunities
                </span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-balance text-white sm:text-7xl font-[var(--font-display)]">
                Mudit Gupta
              </h1>
              <h2 className="mt-6 text-2xl font-semibold text-emerald-400 sm:text-3xl font-[var(--font-display)]">
                AI Engineer & Data Science Student
              </h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 font-[var(--font-body)]">
                B.Tech Data Science student specializing in AI, machine learning, and generative AI systems. Currently developing cutting-edge computer vision solutions and multimodal RAG pipelines.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
                <a
                  href="https://github.com/Mudit7715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mudit-gupta-92a8891b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                <a 
                  href="mailto:gupta101mudit@gmail.com"
                  className="inline-flex items-center gap-2 text-sm/6 font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-emerald-600 to-emerald-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}