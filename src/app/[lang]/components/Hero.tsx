import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '../dictionaries'
import LanguageDropdown from './LanguageDropdown'
import HeroForm from './HeroForm'

// Desktop assets
const LOGO = '/icons/logo.svg'
const HERO_BG = '/images/hero-bg.jpg'
const PHONE_ICON = '/icons/phone-icon.svg'
const LANG_ICON = '/icons/lang-icon.svg'
const LANG_CHEVRON = '/icons/lang-chevron.svg'
const FILE_ICON = '/icons/file-icon.svg'
const DOWNLOAD_ICON = '/icons/download-icon.svg'

// Mobile assets (from Figma mobile frame)
const MOBILE_LOGO = '/icons/mobile-logo.svg'
const MOBILE_HERO_BG = '/images/mobile-hero-bg.jpg'
const MOBILE_LANG_ICON = '/icons/mobile-lang-icon.svg'
const MOBILE_LANG_CHEVRON = '/icons/mobile-lang-chevron.svg'
const MOBILE_FILE_ICON = '/icons/mobile-file-icon.svg'
const MOBILE_DOWNLOAD_ICON_1 = '/icons/mobile-download-icon-1.svg'
const MOBILE_DOWNLOAD_ICON_2 = '/icons/mobile-download-icon-2.svg'

export default function Hero({ dict, lang }: { dict: Dictionary; lang: string }) {
  const t = dict.nav
  const h = dict.hero

  return (
    <section className="relative w-full bg-[#425263]">
      {/* ── MOBILE HERO (< lg) ── */}
      <div className="lg:hidden relative h-[844px] flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            src={MOBILE_HERO_BG}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.4)] to-[#111]" />
        </div>

        {/* Mobile Navbar */}
        <div className="relative z-50 flex items-center justify-between px-[20px] py-[40px] h-[105px]">
          <Image alt="Reportage Heights" src={MOBILE_LOGO} width={132} height={26} className="object-contain" priority />
          <LanguageDropdown
            lang={lang}
            currentLabel={t.lang}
            variant="mobile"
            langIcon={MOBILE_LANG_ICON}
            chevronIcon={MOBILE_LANG_CHEVRON}
          />
        </div>

        {/* Mobile Hero Content */}
        <div className="relative z-10 flex flex-col flex-1 justify-end px-[20px] pb-[60px] gap-[12px]">
          {/* Badge + Title + Subtitle */}
          <div className="flex flex-col gap-[16px] w-[350px]">
            <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[16px] py-[10px] rounded-[8px] self-start">
              <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[4.8px] uppercase">{h.tagline}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-white text-[40px] leading-[48px]">{h.titleLine1}</span>
              <span className="font-serif text-white text-[40px] leading-[48px]">{h.titleLine2}</span>
            </div>
          </div>
          <div className="w-[350px]">
            <p className="font-sans font-light text-[16px] text-[#d8d2c4] leading-[20px]">{h.subtitle}</p>
          </div>

          {/* Download cards */}
          <div className="flex flex-col gap-[17px] pt-[16px] w-[350px]">
            {[
              { label: h.brochure, icon: MOBILE_DOWNLOAD_ICON_1, href: `/brochure-${lang}.pdf` },
              { label: h.floorPlans, icon: MOBILE_DOWNLOAD_ICON_2, href: '/floor-plans.pdf' },
            ].map((card) => (
              <a
                key={card.label}
                href={card.href}
                download={card.href !== '#' ? true : undefined}
                className="flex gap-[32px] items-center p-[13px] bg-[rgba(66,82,99,0.7)] border border-[rgba(216,210,196,0.15)] rounded-[12px] w-full cursor-pointer"
              >
                <div className="bg-[rgba(255,255,255,0.1)] rounded-[8px] size-[80px] flex items-center justify-center shrink-0">
                  <Image alt="" src={MOBILE_FILE_ICON} width={40} height={40} />
                </div>
                <div className="flex flex-col gap-[8px] flex-1">
                  <span className="font-serif text-white text-[20px] leading-[24px]">{card.label}</span>
                  <div className="flex items-center gap-[8px]">
                    <img alt="" src={card.icon} className="size-[16px]" />
                    <span className="font-sans font-semibold text-[13px] text-[#e6b867] tracking-[1.3px] uppercase">{h.downloadPdf}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (>= lg) ── */}
      <div className="hidden lg:block">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            src={HERO_BG}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(134.77deg, rgba(0,0,0,0.3) 12.83%, rgba(10,11,11,0.3) 56.49%, rgba(0,0,0,0.3) 70.14%)' }}
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white px-[80px] py-[32px] w-full shadow-sm">
          <Image alt="Reportage Heights" src={LOGO} width={240} height={47} className="object-contain" priority />
          <div className="flex items-center gap-[40px]">
            <Link href="#vision" className="font-sans font-medium text-[14px] text-black tracking-[1.4px] uppercase">{t.vision}</Link>
            <Link href="#experience" className="font-sans font-medium text-[14px] text-black tracking-[1.4px] uppercase">{t.virtualTour}</Link>
            <Link href="#files" className="font-sans font-medium text-[14px] text-black tracking-[1.4px] uppercase">{t.downloads}</Link>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="flex items-center bg-[#e6b867] px-[24px] py-[12px] rounded-[4px] hover:bg-[#d4a655] transition-colors">
              <span className="font-sans font-bold text-[14px] text-white">{t.phone}</span>
            </a>
            <LanguageDropdown
              lang={lang}
              currentLabel={t.lang}
              variant="desktop"
              langIcon={LANG_ICON}
              chevronIcon={LANG_CHEVRON}
            />
          </div>
        </nav>

        {/* Desktop Hero Content */}
        <div className="relative z-10 flex gap-[58px] items-end justify-center pb-[80px] px-[80px] min-h-[823px] bg-[rgba(39,39,39,0.46)] pt-[111px]">
          <div className="flex flex-col items-start w-[806px]">
            <div className="flex flex-col gap-[16px] items-start justify-center max-w-[650px] w-[650px] py-[80px] pt-[120px]">
              <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[16px] py-[10px] rounded-[8px]">
                <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{h.tagline}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-serif text-white text-[88px] leading-[96px]">{h.titleLine1}</span>
                <span className="font-serif text-white text-[88px] leading-[96px]">{h.titleLine2}</span>
              </div>
              <p className="font-sans font-normal text-[20px] text-white leading-[28px] max-w-[550px]">{h.subtitle}</p>
              <div className="flex items-start gap-[48px] pt-[24px]">
                <div className="flex flex-col gap-[4px]">
                  <span className="font-serif text-[40px] text-[#e6b867] leading-[48px]">{h.units}</span>
                  <span className="font-sans font-semibold text-[12px] text-[#f5efdf] tracking-[2.2px] uppercase">{h.unitsLabel}</span>
                </div>
                <div className="bg-[rgba(216,210,196,0.3)] w-px h-[50px]" />
                <div className="flex flex-col gap-[4px]">
                  <span className="font-serif text-[40px] text-[#e6b867] leading-[48px]">{h.sqm}</span>
                  <span className="font-sans font-semibold text-[12px] text-[#f5efdf] tracking-[2.2px] uppercase">{h.sqmLabel}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center w-full">
              {[{ label: h.brochure, icon: DOWNLOAD_ICON, href: `/brochure-${lang}.pdf` }, { label: h.floorPlans, icon: DOWNLOAD_ICON, href: '/floor-plans.pdf' }].map((card) => (
                <a key={card.label} href={card.href} download={card.href !== '#' ? true : undefined} className="flex gap-[32px] items-center p-[13px] bg-[rgba(66,82,99,0.7)] border border-[rgba(216,210,196,0.15)] rounded-[12px] w-[339px] cursor-pointer hover:bg-[rgba(66,82,99,0.9)] transition-colors">
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-[8px] size-[80px] flex items-center justify-center shrink-0">
                    <Image alt="" src={FILE_ICON} width={40} height={40} />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <span className="font-serif text-white text-[24px] leading-[30px]">{card.label}</span>
                    <div className="flex items-center gap-[8px]">
                      <img alt="" src={card.icon} className="size-[16px]" />
                      <span className="font-sans font-semibold text-[13px] text-[#e6b867] tracking-[1.3px] uppercase">{h.downloadPdf}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Contact form */}
          <HeroForm dict={dict} lang={lang} />
        </div>
      </div>
    </section>
  )
}
