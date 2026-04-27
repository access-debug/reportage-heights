'use client'

import { useState } from 'react'
import type { Dictionary } from '../dictionaries'

type Props = { dict: Dictionary; lang: string }

export default function HeroForm({ dict, lang }: Props) {
  const f = dict.heroForm

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
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
          phone: `${f.countryCode}${phone}`,
          lang,
          source: 'Hero Form',
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setPhone('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-[3px] bg-[rgba(66,82,99,0.88)] border border-[rgba(230,184,103,0.3)] flex flex-col gap-[32px] items-start p-[49px] rounded-[8px] shadow-[2px_2px_6.8px_0px_rgba(66,82,99,0.2)] w-[416px] self-end shrink-0"
    >
      <div className="flex flex-col gap-[8px] items-center w-full">
        <h2 className="font-serif text-white text-[30px] leading-[40px] text-center">{f.title}</h2>
        <p className="font-sans font-normal text-[14px] text-white leading-[22px] text-center">{f.subtitle}</p>
      </div>
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[8px]">
          <label className="font-sans font-semibold text-[11px] text-[#e6b867] tracking-[1.1px] uppercase">{f.fullName}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="bg-transparent border-b border-[rgba(216,210,196,0.24)] h-[32px] font-sans font-normal text-[14px] text-white outline-none focus:border-[rgba(216,210,196,0.6)] transition-colors placeholder:text-[rgba(255,255,255,0.3)] w-full"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="font-sans font-semibold text-[11px] text-[#e6b867] tracking-[1.1px] uppercase">{f.email}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-transparent border-b border-[rgba(216,210,196,0.24)] h-[32px] font-sans font-normal text-[14px] text-white outline-none focus:border-[rgba(216,210,196,0.6)] transition-colors placeholder:text-[rgba(255,255,255,0.3)] w-full"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="font-sans font-semibold text-[11px] text-[#e6b867] tracking-[1.1px] uppercase">{f.phone}</label>
          <div className="flex items-center border-b border-[rgba(216,210,196,0.24)] h-[32px] focus-within:border-[rgba(216,210,196,0.6)] transition-colors">
            <span className="font-sans font-normal text-[14px] text-white mr-[6px] shrink-0">{f.countryCode}</span>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              className="bg-transparent font-sans font-normal text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.3)] w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        {status === 'success' ? (
          <div className="bg-[rgba(230,184,103,0.2)] border border-[#e6b867] rounded-[4px] h-[58px] flex items-center justify-center">
            <span className="font-sans font-bold text-[14px] text-[#e6b867] tracking-[1px]">✓ Submitted successfully</span>
          </div>
        ) : (
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#e6b867] flex items-center justify-center h-[58px] rounded-[4px] w-full hover:bg-[#d4a655] transition-colors disabled:opacity-60"
          >
            <span className="font-sans font-bold text-[14px] text-white tracking-[2.1px] uppercase">
              {status === 'loading' ? '...' : f.submit}
            </span>
          </button>
        )}
        {status === 'error' && (
          <p className="font-sans text-[12px] text-red-400 text-center">Something went wrong. Please try again.</p>
        )}
        <div className="flex items-center gap-[8px] justify-center">
          <span className="font-sans font-normal text-[12px] text-[rgba(255,255,255,0.7)]">{f.privacyText}</span>
          <span className="font-sans font-normal text-[11px] text-white underline cursor-pointer">{f.privacyLink}</span>
        </div>
      </div>
    </form>
  )
}
