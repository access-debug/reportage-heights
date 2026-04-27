import Image from 'next/image'
import type { Dictionary } from '../dictionaries'

const IMG_1 = '/images/amenities-1.jpg'
const IMG_2 = '/images/amenities-2.jpg'
const MOBILE_IMG = '/images/mobile-amenities.jpg'
const ICON_POOL = '/icons/icon-pool.svg'
const ICON_FITNESS = '/icons/icon-fitness.svg'
const ICON_PARKING = '/icons/icon-parking.svg'
const ICON_RETAIL = '/icons/icon-retail.svg'
const MOBILE_ICON_POOL = '/icons/mobile-icon-pool.svg'
const MOBILE_ICON_FITNESS = '/icons/mobile-icon-fitness.svg'
const MOBILE_ICON_PARKING = '/icons/mobile-icon-parking.svg'
const MOBILE_ICON_RETAIL = '/icons/mobile-icon-retail.svg'

export default function Amenities({ dict }: { dict: Dictionary }) {
  const t = dict.amenities

  const mobileItems = [
    { icon: MOBILE_ICON_POOL, label: t.pools },
    { icon: MOBILE_ICON_FITNESS, label: t.fitness },
    { icon: MOBILE_ICON_PARKING, label: t.parking },
    { icon: MOBILE_ICON_RETAIL, label: t.retail },
  ]

  const desktopItems = [
    { icon: ICON_POOL, label: t.pools },
    { icon: ICON_FITNESS, label: t.fitness },
    { icon: ICON_PARKING, label: t.parking },
    { icon: ICON_RETAIL, label: t.retail },
  ]

  return (
    <section className="bg-white w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[48px] px-[20px] py-[42px]">
        {/* Header */}
        <div className="flex flex-col gap-[24px] w-full">
          <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
            <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[#425263] text-[40px] leading-[46px]">{t.titleLine1}</span>
            <span className="font-serif text-[#425263] text-[40px] leading-[46px]">{t.titleLine2}</span>
          </div>
          <p className="font-sans font-normal text-[16px] text-[#475569] leading-[20px]">{t.descMobile}</p>
        </div>

        {/* 2x2 tile grid */}
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex gap-[12px]">
            {mobileItems.slice(0, 2).map((item) => (
              <div key={item.label} className="flex-1 flex flex-col gap-[20px] items-start p-[20px] bg-[#d8d2c4] rounded-[8px]">
                <Image alt="" src={item.icon} width={32} height={32} />
                <span className="font-serif text-[#425263] text-[16px] leading-[20px]">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-[12px]">
            {mobileItems.slice(2, 4).map((item) => (
              <div key={item.label} className="flex-1 flex flex-col gap-[20px] items-start p-[20px] bg-[#d8d2c4] rounded-[8px]">
                <Image alt="" src={item.icon} width={32} height={32} />
                <span className="font-serif text-[#425263] text-[16px] leading-[20px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Single image */}
        <div className="relative h-[282px] w-full rounded-[8px] overflow-hidden">
          <Image
            alt=""
            src={MOBILE_IMG}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw"
          />
        </div>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col gap-[80px] items-start px-[80px] py-[140px]">
        {/* Header */}
        <div className="flex items-end justify-between w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[24px] items-start w-[633px]">
            <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px]">
              <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[#425263] text-[64px] leading-[72px]">{t.titleLine1}</span>
              <span className="font-serif text-[#425263] text-[64px] leading-[72px]">{t.titleLine2}</span>
            </div>
          </div>
          <div className="border-l border-[rgba(66,82,99,0.2)] pl-[41px] w-[541px]">
            <p className="font-sans font-normal text-[18px] text-[#475569] leading-[33px]">{t.desc}</p>
          </div>
        </div>

        {/* Amenity tiles */}
        <div className="flex gap-[40px] w-full max-w-[1280px] mx-auto">
          {desktopItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-[24px] items-start p-[40px] bg-[#d8d2c4] rounded-[8px] w-[290px]">
              <Image alt="" src={item.icon} width={32} height={32} />
              <span className="font-serif text-[#425263] text-[20px] leading-[24px]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Gallery images */}
        <div className="flex flex-col gap-[24px] w-full max-w-[1280px] mx-auto">
          <div className="flex gap-[40px] h-[500px]">
            <div className="flex-1 relative rounded-[8px] overflow-hidden">
              <Image alt="" src={IMG_1} fill className="object-cover" sizes="(min-width: 1024px) 50vw" />
            </div>
            <div className="flex-1 relative rounded-[8px] overflow-hidden">
              <Image alt="" src={IMG_2} fill className="object-cover" sizes="(min-width: 1024px) 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
