'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import type { Dictionary } from '../dictionaries'

const VISION_IMG = '/images/vision.jpg'
const MOBILE_VISION_IMG = '/images/mobile-vision.jpg'
const CHECK_ICON = '/icons/check-icon.svg'
const PLAY_ICON = '/icons/vision-play-icon.svg'
const VIDEO_SRC = '/tour.mp4'

export default function Vision({ dict }: { dict: Dictionary }) {
  const t = dict.vision
  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden'
      videoRef.current?.play()
    } else {
      document.body.style.overflow = ''
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
    return () => { document.body.style.overflow = '' }
  }, [videoOpen])

  return (
    <>
      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-[20px] right-[20px] text-white text-[32px] leading-none hover:text-[#e6b867] transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            controls
            playsInline
            className="max-w-[90vw] max-h-[90vh] rounded-[8px]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section id="vision" className="bg-white w-full" style={{ contentVisibility: 'auto' }}>
        {/* ── MOBILE (< lg) ── */}
        <div className="lg:hidden flex flex-col gap-[40px] px-[20px] pb-[29px] pt-[45px]">
          {/* Text content */}
          <div className="flex flex-col gap-[24px] w-full">
            <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
              <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[#425263] text-[40px] leading-[46px]">{t.titleLine1}</span>
              <span className="font-serif text-[#425263] text-[40px] leading-[46px]">{t.titleLine2}</span>
            </div>
            <p className="font-sans font-normal text-[16px] text-[#425263] leading-[20px]">{t.descMobile}</p>
          </div>

          {/* Image card with play button */}
          <div
            className="relative bg-[#f5f5f5] h-[400px] rounded-[8px] overflow-hidden flex items-end p-[24px] cursor-pointer"
            onClick={() => setVideoOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0)] via-transparent to-[rgba(255,255,255,0.8)]" />
            <Image
              alt="Reportage Heights"
              src={MOBILE_VISION_IMG}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw"
            />
            {/* Centered play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[rgba(255,255,255,0.13)] flex items-center justify-center rounded-[100px] size-[90px] p-[8px]">
                <div className="bg-[#e6b867] border-[8px] border-[rgba(255,255,255,0.06)] flex items-center justify-center rounded-[50px] size-[74px]">
                  <img alt="Play" src={PLAY_ICON} className="size-[28px]" />
                </div>
              </div>
            </div>
            {/* Tower badge at bottom-left */}
            <div className="relative flex flex-col gap-[8px] items-start">
              <span className="font-sans font-semibold text-[10px] text-white tracking-[2px] uppercase">{t.towerLabel}</span>
              <span className="font-display text-white text-[28px] leading-[34px]">{t.towerValue}</span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP (>= lg) ── */}
        <div className="hidden lg:flex gap-[80px] items-center justify-center px-[80px] py-[140px]">
          {/* Left: text content */}
          <div className="flex flex-col gap-[40px] items-start w-[545px] shrink-0">
            <div className="flex flex-col gap-[20px] items-start w-full">
              <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px]">
                <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[#425263] text-[64px] leading-[72px]">{t.titleLine1}</span>
                <span className="font-serif text-[#425263] text-[64px] leading-[72px]">{t.titleLine2}</span>
              </div>
              <p className="font-sans font-normal text-[18px] text-[#425263] leading-[26px]">{t.desc}</p>
            </div>
            <div className="flex flex-col gap-[24px] w-full">
              {[
                { title: t.feature1Title, desc: t.feature1Desc },
                { title: t.feature2Title, desc: t.feature2Desc },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-[12px] items-start">
                  <img alt="" src={CHECK_ICON} className="size-[24px] shrink-0 mt-[2px]" />
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-serif text-[#425263] text-[20px] leading-[24px]">{feature.title}</span>
                    <p className="font-sans font-normal text-[15px] text-[#425263] leading-[18px] opacity-80">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with play button */}
          <div className="relative w-[654px] h-[650px] shrink-0">
            <div
              className="relative w-full h-full rounded-[12px] overflow-hidden shadow-[0px_40px_100px_0px_rgba(66,82,99,0.2)] cursor-pointer"
              onClick={() => setVideoOpen(true)}
            >
              <img alt="Reportage Heights" src={VISION_IMG} className="absolute w-full h-[134%] object-cover top-[-26%]" />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.24)] rounded-[8px] flex items-center justify-center">
                <div className="bg-[rgba(255,255,255,0.13)] flex items-center justify-center rounded-[100px] size-[123px] p-[11px] hover:scale-105 transition-transform">
                  <div className="bg-[#e6b867] border-[10px] border-[rgba(255,255,255,0.06)] flex items-center justify-center rounded-[50px] size-[100px]">
                    <img alt="Play" src={PLAY_ICON} className="size-[36px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#425263] border border-[rgba(230,184,103,0.3)] flex flex-col gap-[8px] items-start p-[41px] rounded-[8px] bottom-[-70px] right-0 w-[211px]">
              <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[2.4px] uppercase">{t.towerLabel}</span>
              <span className="font-display text-white text-[32px] leading-[40px]">{t.towerValue}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
