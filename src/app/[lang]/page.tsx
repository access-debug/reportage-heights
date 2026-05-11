import type { Metadata } from 'next'
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

const SEO: Record<string, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'Sea Breeze Baku | Reportage Heights – Luxury Apartments on Halfmoon Island',
    description:
      'Rising from Baku's Halfmoon island near Sea Breeze, Reportage Heights offers 1,885 luxury apartments from 29.6–227.9 m². Studio, 1-bedroom and 2-bedroom units with stunning Caspian Sea views. Register your interest today.',
    keywords:
      'Sea Breeze Baku, Reportage Heights, Halfmoon Baku, luxury apartments Baku, Caspian Sea view apartments, new apartments Baku, 1 bedroom Baku, studio apartment Baku',
  },
  az: {
    title: 'Sea Breeze Bakı | Reportage Heights – Halfmoon Adasında Lüks Mənzillər',
    description:
      'Bakının Sea Breeze yaxınlığında, Halfmoon sahilində yüksələn Reportage Heights, 29.6–227.9 m² arası 1,885 lüks mənzil təqdim edir. Studio, 1 və 2 otaqlı mənzillər Xəzər dənizi mənzərəsi ilə. İndi qeydiyyatdan keçin.',
    keywords:
      'Sea Breeze Bakı, Reportage Heights, Halfmoon Bakı, lüks mənzillər Bakı, Xəzər dənizi mənzərəsi, yeni mənzillər Bakı, 1 otaqlı mənzil Bakı',
  },
  ru: {
    title: 'Sea Breeze Баку | Reportage Heights – Элитные Апартаменты на Halfmoon',
    description:
      'Возвышаясь рядом с Sea Breeze на острове Halfmoon в Баку, Reportage Heights предлагает 1 885 апартаментов площадью 29,6–227,9 м². Студии, квартиры с 1 и 2 спальнями с панорамным видом на Каспийское море. Оставьте заявку сегодня.',
    keywords:
      'Sea Breeze Баку, Reportage Heights, Halfmoon Баку, элитные квартиры Баку, вид на Каспийское море, новые квартиры Баку, квартира с 1 спальней Баку',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const seo = SEO[lang] ?? SEO.en

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      locale: lang === 'ru' ? 'ru_RU' : lang === 'az' ? 'az_AZ' : 'en_US',
      siteName: 'Reportage Heights',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

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
