import type { Dictionary } from '../dictionaries'

const CHEVRON_ICON = '/icons/chevron-icon.svg'
const MOBILE_CHEVRON_ICON = '/icons/mobile-chevron-icon.svg'

export default function FormSection({ dict }: { dict: Dictionary }) {
  const t = dict.form

  return (
    <section className="bg-white w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[40px] px-[20px] py-[40px]">
        {/* Header */}
        <div className="flex flex-col gap-[20px] items-center w-full">
          <div className="flex flex-col items-center">
            <span className="font-serif text-[#425263] text-[40px] leading-[46px] text-center">{t.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="font-serif text-[#425263] text-[40px] leading-[46px] text-center">{t.title.split(' ').slice(2).join(' ')}</span>
          </div>
          <p className="font-sans font-normal text-[16px] text-[#475569] leading-[20px] text-center w-[325px]">{t.subtitleMobile}</p>
        </div>

        {/* Form fields - single column */}
        <div className="flex flex-col gap-[24px] w-full">
          {/* Full Name */}
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.fullName}</span>
            <input type="text" placeholder={t.fullNamePlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.email}</span>
            <input type="email" placeholder={t.emailPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.phone}</span>
            <div className="flex items-center gap-[12px]">
              <span className="font-sans font-normal text-[14px] text-[#425263] text-center">{t.countryCode}</span>
              <input type="tel" placeholder={t.phonePlaceholder} className="font-sans font-normal text-[14px] text-[rgba(66,82,99,0.5)] bg-transparent outline-none placeholder:text-[rgba(66,82,99,0.5)]" />
            </div>
          </div>
          {/* Interested in */}
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.interested}</span>
            <input type="text" placeholder={t.interestedPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>
        </div>

        {/* Submit — mobile uses "REGISTER INTEREST" style button */}
        <button className="bg-[#e6b867] flex items-center justify-center h-[56px] rounded-[4px] w-full hover:bg-[#d4a655] transition-colors">
          <span className="font-sans font-semibold text-[12px] text-white tracking-[1.8px] uppercase">{t.submit}</span>
        </button>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex items-start justify-center px-[80px] py-[140px]">
        <div className="flex flex-col gap-[40px] items-start w-[800px]">
          <div className="flex flex-col gap-[16px] items-center w-full">
            <h2 className="font-serif text-[#425263] text-[56px] leading-[65px] text-center">{t.title}</h2>
            <p className="font-sans font-normal text-[18px] text-[#475569] leading-[29px] text-center">{t.subtitle}</p>
          </div>
          <div className="flex gap-[40px] items-start w-full">
            <div className="flex-1 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.fullName}</span>
                <input type="text" placeholder={t.fullNamePlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
              </div>
              <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.email}</span>
                <input type="email" placeholder={t.emailPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.phone}</span>
                <div className="flex items-center gap-[12px]">
                  <span className="font-sans font-normal text-[14px] text-[#425263]">{t.countryCode}</span>
                  <input type="tel" placeholder={t.phonePlaceholder} className="font-sans font-normal text-[14px] text-[rgba(66,82,99,0.5)] bg-transparent outline-none placeholder:text-[rgba(66,82,99,0.5)]" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.interested}</span>
                <input type="text" placeholder={t.interestedPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
              </div>
            </div>
          </div>
          <button className="bg-[#e6b867] flex items-center justify-center h-[68px] rounded-[4px] w-full hover:bg-[#d4a655] transition-colors">
            <span className="font-sans font-semibold text-[16px] text-white tracking-[2.4px] uppercase">{t.submit}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
