import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '../dictionaries'

const LOGO = '/icons/footer-logo.svg'
const MOBILE_LOGO = '/icons/footer-mobile-logo.svg'

export default function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
  const t = dict.footer

  return (
    <footer className="bg-[#2b3641] w-full">
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[52px] px-[20px] py-[60px]">
        {/* Logo */}
        <Image alt="Reportage Heights" src={MOBILE_LOGO} width={240} height={47} className="object-contain" />

        {/* Links stacked vertically */}
        <div className="flex flex-col gap-[40px]">
          {/* Sales Gallery */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.salesGallery}</span>
            <div className="flex flex-col">
              <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.address1}</span>
              <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.address2}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.contact}</span>
            <div className="flex flex-col">
              <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.phone}</span>
              <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.email}</span>
            </div>
          </div>

          {/* Follow */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.follow}</span>
            <div className="flex flex-col">
              <a href="https://www.instagram.com/reportageazerbaijan/" target="_blank" rel="noopener noreferrer" className="font-sans font-light text-[16px] text-white leading-[26px] hover:text-[#e6b867] transition-colors">{t.instagram}</a>
              <a href="https://www.linkedin.com/company/reportageazerbaijan" target="_blank" rel="noopener noreferrer" className="font-sans font-light text-[16px] text-white leading-[26px] hover:text-[#e6b867] transition-colors">{t.linkedin}</a>
              <a href="https://www.facebook.com/Reportage.Azerbaijan" target="_blank" rel="noopener noreferrer" className="font-sans font-light text-[16px] text-white leading-[26px] hover:text-[#e6b867] transition-colors">{t.facebook}</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-[41px] flex flex-col gap-[24px]">
          <div className="flex gap-[24px] items-center">
            <Link href="#" className="font-sans font-normal text-[12px] text-[rgba(255,255,255,0.5)] leading-[16px] hover:text-white transition-colors">{t.privacy}</Link>
            <Link href="#" className="font-sans font-normal text-[12px] text-[rgba(255,255,255,0.5)] leading-[16px] hover:text-white transition-colors">{t.terms}</Link>
          </div>
          <span className="font-sans font-normal text-[11px] text-[rgba(255,255,255,0.3)] leading-[17px]">{t.copyright}</span>
        </div>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col gap-[80px] items-start px-[80px] py-[120px]">
        <div className="flex items-start justify-between w-full max-w-[1280px] mx-auto">
          <Image alt="Reportage Heights" src={LOGO} width={240} height={47} className="object-contain" />
          <div className="flex gap-[100px] items-start">
            <div className="flex flex-col gap-[24px]">
              <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.salesGallery}</span>
              <div className="flex flex-col">
                <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.address1}</span>
                <span className="font-sans font-light text-[16px] text-white leading-[26px]">{t.address2}</span>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.contact}</span>
              <div className="flex flex-col gap-[12px]">
                <a href={`mailto:${t.email}`} className="font-sans font-light text-[16px] text-white leading-[26px] hover:text-[#e6b867] transition-colors">{t.email}</a>
                <a href={`tel:${t.phone}`} className="font-sans font-light text-[16px] text-white leading-[26px] hover:text-[#e6b867] transition-colors">{t.phone}</a>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <span className="font-sans font-bold text-[14px] text-white tracking-[1.4px] uppercase">{t.follow}</span>
              <div className="flex flex-col gap-[12px]">
                <a href="https://www.instagram.com/reportageazerbaijan/" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[14px] text-[#d8d2c4] leading-[18px] hover:text-white transition-colors">{t.instagram}</a>
                <a href="https://www.linkedin.com/company/reportageazerbaijan" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[14px] text-[#d8d2c4] leading-[18px] hover:text-white transition-colors">{t.linkedin}</a>
                <a href="https://www.facebook.com/Reportage.Azerbaijan" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[14px] text-[#d8d2c4] leading-[18px] hover:text-white transition-colors">{t.facebook}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[rgba(216,210,196,0.1)] pt-[41px] w-full max-w-[1280px] mx-auto">
          <span className="font-sans font-normal text-[12px] text-[rgba(216,210,196,0.6)] leading-[16px]">{t.copyright}</span>
          <div className="flex gap-[32px] items-center">
            <Link href="#" className="font-sans font-normal text-[12px] text-[rgba(216,210,196,0.6)] leading-[16px] hover:text-white transition-colors">{t.privacy}</Link>
            <Link href="#" className="font-sans font-normal text-[12px] text-[rgba(216,210,196,0.6)] leading-[16px] hover:text-white transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
