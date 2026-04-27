import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Experience from './components/Experience'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import Files from './components/Files'
import About from './components/About'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main>
      <Hero dict={dict} lang={lang} />
      <Vision dict={dict} />
      <Experience dict={dict} />
      <Amenities dict={dict} />
      <Gallery dict={dict} />
      <MapSection dict={dict} />
      <Files dict={dict} lang={lang} />
      <About dict={dict} />
      <FormSection dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  )
}
