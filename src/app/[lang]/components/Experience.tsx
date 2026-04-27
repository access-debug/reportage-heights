'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Dictionary } from '../dictionaries'

const EXPERIENCE_BG = '/images/experience-bg.jpg'
const MOBILE_EXPERIENCE_BG = '/images/mobile-experience-bg.jpg'
const IMG_1BED = '/images/exp-1bed.jpg'
const IMG_STUDIO = '/images/exp-studio.jpg'
const MOBILE_IMG_1BED = '/images/mobile-exp-1bed.jpg'
const MOBILE_IMG_STUDIO = '/images/mobile-exp-studio.jpg'
const PLAY_ICON = '/icons/play-icon.svg'
const MOBILE_ARROW_ICON = '/icons/mobile-arrow-icon.svg'

const TOUR_1BD = 'https://kuula.co/share/collection/7HXxs?logo=1&info=0&logosize=160&fs=1&vr=1&zoom=1&gyro=0&autorotate=0.04&thumbs=3&margin=2&inst=0'
const TOUR_STUDIO = 'https://kuula.co/share/collection/7HXxs?logo=1&info=0&logosize=160&fs=1&vr=1&zoom=1&gyro=0&autorotate=0.04&thumbs=3&margin=2&inst=0'

export default function Experience({ dict }: { dict: Dictionary }) {
  const t = dict.experience
  const [activeTour, setActiveTour] = useState<string | null>(null)

  const mobileApartments = [
    { title: t.type1Title, img: MOBILE_IMG_1BED, tourUrl: TOUR_1BD },
    { title: t.type2Title, img: MOBILE_IMG_STUDIO, tourUrl: TOUR_STUDIO },
    { title: t.type3Title, img: MOBILE_IMG_1BED, tourUrl: null },
  ]

  const desktopApartments = [
    { badge: t.type1Badge, title: t.type1Title, img: IMG_1BED, total: t.type1Total, internal: t.type1Internal, balcony: t.type1Balcony, tourUrl: TOUR_1BD },
    { badge: t.type2Badge, title: t.type2Title, img: IMG_STUDIO, total: t.type2Total, internal: t.type2Internal, balcony: t.type2Balcony, tourUrl: TOUR_STUDIO },
    { badge: t.type3Badge, title: t.type3Title, img: IMG_1BED, total: t.type3Total, internal: t.type3Internal, balcony: t.type3Balcony, tourUrl: null },
  ]

  return (
    <>
      {/* Tour Modal */}
      {activeTour && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setActiveTour(null)}
        >
          <button
            onClick={() => setActiveTour(null)}
            className="absolute top-[20px] right-[20px] text-white text-[32px] leading-none hover:text-[#e6b867] transition-colors z-10"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="w-[90vw] h-[85vh] rounded-[8px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeTour}
              allowFullScreen
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      <section id="experience" className="relative w-full" style={{ contentVisibility: 'auto' }}>
        {/* ── MOBILE (< lg) ── */}
        <div className="lg:hidden relative flex flex-col gap-[40px] px-[20px] pb-[42px] pt-[45px]">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              alt=""
              src={MOBILE_EXPERIENCE_BG}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
          </div>

          {/* Header */}
          <div className="relative flex flex-col gap-[20px] w-[350px]">
            <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
              <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-white text-[40px] leading-[46px]">{t.title}</span>
            </div>
            <p className="font-sans font-normal text-[16px] text-[#d8d2c4] leading-[20px]">{t.descMobile}</p>
          </div>

          {/* Cards stacked vertically */}
          <div className="relative flex flex-col gap-[32px] w-[350px]">
            {mobileApartments.map((apt) => (
              <div key={apt.title} className="bg-[rgba(0,0,0,0.2)] border border-[rgba(216,210,196,0.2)] flex flex-col rounded-[6px] overflow-hidden">
                <div className="relative h-[240px] w-full overflow-hidden rounded-t-[6px]">
                  <Image
                    alt={apt.title}
                    src={apt.img}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw"
                  />
                </div>
                <div className="bg-[#e8e7e6] flex flex-col gap-[24px] items-start p-[24px]">
                  <span className="font-serif text-black text-[24px] leading-[30px]">{apt.title}</span>
                  {apt.tourUrl && (
                    <button
                      onClick={() => setActiveTour(apt.tourUrl)}
                      className="bg-[#e6b867] flex items-center justify-center gap-[12px] h-[52px] w-full rounded-[4px] hover:bg-[#d4a655] transition-colors"
                    >
                      <span className="font-sans font-bold text-[13px] text-white tracking-[1.3px] uppercase">{t.startTour}</span>
                      <img alt="" src={MOBILE_ARROW_ICON} className="size-[20px]" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP (>= lg) ── */}
        <div className="hidden lg:flex flex-col gap-[40px] items-start px-[80px] py-[140px] relative">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              alt=""
              src={EXPERIENCE_BG}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
          </div>

          {/* Header */}
          <div className="relative flex flex-col gap-[24px] items-center w-full">
            <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px]">
              <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
            </div>
            <h2 className="font-serif text-white text-[64px] leading-[72px] text-center">{t.title}</h2>
            <p className="font-sans font-normal text-[18px] text-[#d8d2c4] leading-[26px] text-center max-w-[800px]">{t.desc}</p>
          </div>

          {/* Apartment cards */}
          <div className="relative flex gap-[20px] items-start justify-center w-full">
            {desktopApartments.map((apt) => (
              <div key={apt.title} className="flex-1 flex flex-col bg-[rgba(216,210,196,0.05)] border border-[rgba(216,210,196,0.1)] rounded-[12px] overflow-hidden">
                <div className="relative h-[350px] w-full shrink-0">
                  <Image
                    alt={apt.title}
                    src={apt.img}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-[rgba(66,82,99,0.3)] flex items-center justify-center">
                    {apt.tourUrl && (
                      <button
                        onClick={() => setActiveTour(apt.tourUrl)}
                        className="flex items-center gap-[12px] bg-[#e6b867] px-[32px] py-[16px] rounded-[4px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.3)] hover:bg-[#d4a655] transition-colors"
                      >
                        <img alt="" src={PLAY_ICON} className="size-[20px]" />
                        <span className="font-sans font-bold text-[13px] text-white tracking-[1.3px] uppercase">{t.startTour}</span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start p-[40px] bg-[rgba(251,251,251,0.9)]">
                  <div className="bg-[rgba(230,184,103,0.15)] flex items-center px-[12px] py-[6px] rounded-[4px]">
                    <span className="font-sans font-bold text-[11px] text-[#e6b867] uppercase">{apt.badge}</span>
                  </div>
                  <h3 className="font-serif text-[26px] text-black leading-[34px]">{apt.title}</h3>
                  <div className="flex flex-col gap-[12px] w-full">
                    {[
                      { label: t.totalArea, value: apt.total },
                      { label: t.internalArea, value: apt.internal },
                      { label: t.balcony, value: apt.balcony },
                    ].map((row, i) => (
                      <div key={row.label} className={`flex justify-between items-center py-[8px] ${i < 2 ? 'border-b border-[rgba(216,210,196,0.2)]' : ''}`}>
                        <span className="font-sans font-normal text-[14px] text-black">{row.label}</span>
                        <span className="font-sans font-medium text-[14px] text-black">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
