'use client'

import { useState } from 'react'
import type { Dictionary } from '../dictionaries'

export default function FormSection({ dict, lang }: { dict: Dictionary; lang: string }) {
  const t = dict.form

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !phone) return
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: `${t.countryCode}${phone}`,
          interest,
          lang,
          source: 'Contact Form',
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setPhone(''); setInterest('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-white w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[40px] px-[20px] py-[40px]">
        <div className="flex flex-col gap-[20px] items-center w-full">
          <div className="flex flex-col items-center">
            <span className="font-serif text-[#425263] text-[40px] leading-[46px] text-center">{t.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="font-serif text-[#425263] text-[40px] leading-[46px] text-center">{t.title.split(' ').slice(2).join(' ')}</span>
          </div>
          <p className="font-sans font-normal text-[16px] text-[#475569] leading-[20px] text-center w-[325px]">{t.subtitleMobile}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.fullName}</span>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder={t.fullNamePlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.email}</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.emailPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.phone}</span>
            <div className="flex items-center gap-[12px]">
              <span className="font-sans font-normal text-[14px] text-[#425263] text-center">{t.countryCode}</span>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder={t.phonePlaceholder} className="font-sans font-normal text-[14px] text-[rgba(66,82,99,0.5)] bg-transparent outline-none placeholder:text-[rgba(66,82,99,0.5)]" />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
            <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.interested}</span>
            <input type="text" value={interest} onChange={e => setInterest(e.target.value)} placeholder={t.interestedPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
          </div>

          {status === 'success' ? (
            <div className="bg-[rgba(66,82,99,0.08)] border border-[#425263] rounded-[4px] h-[56px] flex items-center justify-center">
              <span className="font-sans font-semibold text-[12px] text-[#425263] tracking-[1px]">✓ Submitted successfully</span>
            </div>
          ) : (
            <button type="submit" disabled={status === 'loading'} className="bg-[#e6b867] flex items-center justify-center h-[56px] rounded-[4px] w-full hover:bg-[#d4a655] transition-colors disabled:opacity-60">
              <span className="font-sans font-semibold text-[12px] text-white tracking-[1.8px] uppercase">
                {status === 'loading' ? '...' : t.submit}
              </span>
            </button>
          )}
          {status === 'error' && (
            <p className="font-sans text-[12px] text-red-500 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex items-start justify-center px-[80px] py-[140px]">
        <div className="flex flex-col gap-[40px] items-start w-[800px]">
          <div className="flex flex-col gap-[16px] items-center w-full">
            <h2 className="font-serif text-[#425263] text-[56px] leading-[65px] text-center">{t.title}</h2>
            <p className="font-sans font-normal text-[18px] text-[#475569] leading-[29px] text-center">{t.subtitle}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] items-start w-full">
            <div className="flex gap-[40px] items-start w-full">
              <div className="flex-1 flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                  <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.fullName}</span>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder={t.fullNamePlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
                </div>
                <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                  <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.email}</span>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.emailPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                  <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.phone}</span>
                  <div className="flex items-center gap-[12px]">
                    <span className="font-sans font-normal text-[14px] text-[#425263]">{t.countryCode}</span>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder={t.phonePlaceholder} className="font-sans font-normal text-[14px] text-[rgba(66,82,99,0.5)] bg-transparent outline-none placeholder:text-[rgba(66,82,99,0.5)]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] border-b border-[rgba(66,82,99,0.2)] pb-[9px]">
                  <span className="font-sans font-semibold text-[10px] text-[#425263] tracking-[1.5px] uppercase">{t.interested}</span>
                  <input type="text" value={interest} onChange={e => setInterest(e.target.value)} placeholder={t.interestedPlaceholder} className="font-sans font-normal text-[16px] text-[#425263] opacity-50 bg-transparent outline-none placeholder:opacity-50 placeholder:text-[#425263]" />
                </div>
              </div>
            </div>

            {status === 'success' ? (
              <div className="bg-[rgba(66,82,99,0.08)] border border-[#425263] rounded-[4px] h-[68px] flex items-center justify-center w-full">
                <span className="font-sans font-semibold text-[16px] text-[#425263] tracking-[1px]">✓ Submitted successfully</span>
              </div>
            ) : (
              <button type="submit" disabled={status === 'loading'} className="bg-[#e6b867] flex items-center justify-center h-[68px] rounded-[4px] w-full hover:bg-[#d4a655] transition-colors disabled:opacity-60">
                <span className="font-sans font-semibold text-[16px] text-white tracking-[2.4px] uppercase">
                  {status === 'loading' ? '...' : t.submit}
                </span>
              </button>
            )}
            {status === 'error' && (
              <p className="font-sans text-[14px] text-red-500 text-center w-full">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
