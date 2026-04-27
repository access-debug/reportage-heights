import Image from 'next/image'
import type { Dictionary } from '../dictionaries'

const IMG_1 = '/images/gallery-1.jpg'
const IMG_2 = '/images/gallery-2.jpg'
const IMG_3 = '/images/gallery-3.jpg'
const MOBILE_IMG_1 = '/images/mobile-gallery-1.jpg'

export default function Gallery({ dict }: { dict: Dictionary }) {
  const t = dict.gallery

  const cards = [
    { title: t.card1Title, desc: t.card1Desc, img: IMG_1 },
    { title: t.card2Title, desc: t.card2Desc, img: IMG_2 },
    { title: t.card3Title, desc: t.card3Desc, img: IMG_3 },
  ]

  return (
    <section className="bg-[#425263] w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[48px] items-center px-[20px] py-[42px]">
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-start w-full">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
            <span className="font-sans font-semibold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-white text-[40px] leading-[46px]">{t.title.split(' ').slice(0, 3).join(' ')}</span>
            <span className="font-serif text-white text-[40px] leading-[46px]">{t.title.split(' ').slice(3).join(' ')}</span>
          </div>
          <p className="font-sans font-normal text-[16px] text-[rgba(255,255,255,0.8)] leading-[20px]">{t.descMobile}</p>
        </div>

        {/* Single card */}
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] rounded-[10px] w-full max-w-[344px]">
          <div className="relative h-[249px] w-full rounded-[8px] overflow-hidden">
            <Image
              alt={t.card1Title}
              src={MOBILE_IMG_1}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 344px"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-serif text-[28px] text-black leading-[34px]">{t.card1Title}</h3>
            <p className="font-sans font-normal text-[14px] text-black leading-[23px]">{t.card1Desc}</p>
          </div>
        </div>

      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col gap-[44px] items-center px-[80px] py-[120px]">
        {/* Header */}
        <div className="flex flex-col gap-[12px] items-center max-w-[815px]">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px]">
            <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <h2 className="font-serif text-white text-[56px] leading-[64px] text-center">{t.title}</h2>
          <p className="font-sans font-normal text-[18px] text-white leading-[26px] text-center">{t.desc}</p>
        </div>

        {/* Cards */}
        <div className="flex gap-[40px] justify-center w-full max-w-[1280px]">
          {cards.map((card) => (
            <div key={card.title} className="bg-white flex flex-col gap-[20px] items-start p-[20px] rounded-[10px] w-[344px] shrink-0">
              <div className="relative h-[249px] w-full rounded-[8px] overflow-hidden">
                <Image
                  alt={card.title}
                  src={card.img}
                  fill
                  className="object-cover"
                  sizes="344px"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-serif text-[28px] text-black leading-[34px]">{card.title}</h3>
                <p className="font-sans font-normal text-[14px] text-black leading-[23px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
