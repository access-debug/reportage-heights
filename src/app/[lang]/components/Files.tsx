import Image from 'next/image'
import type { Dictionary } from '../dictionaries'

const FILES_BG = '/images/files-bg.jpg'
const MOBILE_FILES_BG = '/images/mobile-files-bg.jpg'
const FILE_ICON = '/icons/files-file-icon.svg'
const MOBILE_FILE_ICON = '/icons/mobile-files-file-icon.svg'
const DOWNLOAD_ICON_1 = '/icons/files-download-1.svg'
const DOWNLOAD_ICON_2 = '/icons/files-download-2.svg'
const MOBILE_DOWNLOAD_ICON = '/icons/mobile-files-download.svg'

export default function Files({ dict, lang }: { dict: Dictionary; lang: string }) {
  const t = dict.files

  return (
    <section id="files" className="relative w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden relative flex flex-col gap-[48px] px-[20px] py-[40px]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            src={MOBILE_FILES_BG}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
        </div>

        {/* Header */}
        <div className="relative flex flex-col gap-[20px] w-[350px]">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
            <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-white text-[40px] leading-[46px]">{t.title.split(' ')[0]}</span>
            <span className="font-serif text-white text-[40px] leading-[46px]">{t.title.split(' ').slice(1).join(' ')}</span>
          </div>
        </div>

        {/* Download cards stacked */}
        <div className="relative flex flex-col gap-[24px]">
          {[
            { title: t.brochure, icon: MOBILE_DOWNLOAD_ICON, href: `/brochure-${lang}.pdf` },
            { title: t.floorPlans, icon: MOBILE_DOWNLOAD_ICON, href: '/floor-plans.pdf' },
          ].map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              download={doc.href !== '#' ? true : undefined}
              className="flex gap-[32px] items-center p-[41px] bg-[rgba(66,82,99,0.7)] border border-[rgba(216,210,196,0.15)] rounded-[12px] cursor-pointer"
            >
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[8px] size-[80px] flex items-center justify-center shrink-0">
                <Image alt="" src={MOBILE_FILE_ICON} width={40} height={40} />
              </div>
              <div className="flex flex-col gap-[10px]">
                <span className="font-serif text-white text-[20px] leading-[24px]">{doc.title}</span>
                <div className="flex items-center gap-[8px]">
                  <img alt="" src={doc.icon} className="size-[16px]" />
                  <span className="font-sans font-semibold text-[12px] text-[#e6b867] tracking-[1.3px] uppercase">{t.download}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col gap-[40px] items-start px-[80px] py-[140px] relative">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            src={FILES_BG}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
        </div>

        {/* Header */}
        <div className="relative flex flex-col gap-[24px] items-center w-full max-w-[1280px] mx-auto">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px]">
            <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <h2 className="font-serif text-white text-[56px] leading-[65px] text-center">{t.title}</h2>
        </div>

        {/* Download cards */}
        <div className="relative flex gap-[40px] items-start justify-center w-full max-w-[1280px] mx-auto mt-[40px]">
          {[
            { title: t.brochure, icon: DOWNLOAD_ICON_1, href: `/brochure-${lang}.pdf` },
            { title: t.floorPlans, icon: DOWNLOAD_ICON_2, href: '/floor-plans.pdf' },
          ].map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              download={doc.href !== '#' ? true : undefined}
              className="flex gap-[32px] items-center p-[41px] bg-[rgba(66,82,99,0.7)] border border-[rgba(216,210,196,0.15)] rounded-[12px] w-[450px] cursor-pointer hover:bg-[rgba(66,82,99,0.9)] transition-colors"
            >
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[8px] size-[80px] flex items-center justify-center shrink-0">
                <Image alt="" src={FILE_ICON} width={40} height={40} />
              </div>
              <div className="flex flex-col gap-[12px]">
                <span className="font-serif text-white text-[24px] leading-[30px]">{doc.title}</span>
                <div className="flex items-center gap-[8px]">
                  <img alt="" src={doc.icon} className="size-[16px]" />
                  <span className="font-sans font-semibold text-[13px] text-[#e6b867] tracking-[1.3px] uppercase">{t.download}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
