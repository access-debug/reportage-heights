import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API = 'https://api.monday.com/v2'
const API_KEY = process.env.MONDAY_API_KEY!

const BOARDS = {
  aze: {
    id: '5084863499',
    cols: {
      phone: 'lead_phone',
      email: 'lead_email',
      language: 'text_mm128x0b',
      interest: 'text_mm12v8zk',
      form: 'text_mm0xpth9',
      source: 'text_mm0x4vnn',
      timestamp: 'text_mm12xp0p',
      userAgent: 'text_mm12n8v8',
      pageUrl: 'text_mm12kz42',
      referrer: 'text_mm128qx4',
    },
  },
  ru: {
    id: '5088233126',
    cols: {
      phone: 'lead_phone',
      email: 'lead_email',
      language: 'text_mm1jk71e',
      interest: 'text_mm1jasvv',
      form: 'text_mm1jjbfa',
      source: 'text_mm1j1h9',
      timestamp: 'text_mm1jdf60',
      userAgent: 'text_mm1jvbkt',
      pageUrl: null,
      referrer: null,
    },
  },
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, interest, lang, source, pageUrl, userAgent, referrer } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const board = lang === 'ru' ? BOARDS.ru : BOARDS.aze
    const c = board.cols

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columnValues: Record<string, any> = {
      [c.phone]: { phone: phone.replace(/\s/g, ''), countryShortName: 'AZ' },
      [c.language]: lang ?? '',
      [c.interest]: interest ?? '',
      [c.form]: source ?? 'website',
      [c.source]: 'Website',
      [c.timestamp]: new Date().toISOString(),
      [c.userAgent]: userAgent ?? '',
    }
    if (email) columnValues[c.email] = { email, text: email }
    if (c.pageUrl) columnValues[c.pageUrl] = pageUrl ?? ''
    if (c.referrer) columnValues[c.referrer] = referrer ?? ''

    const mutation = `
      mutation {
        create_item(
          board_id: ${board.id},
          group_id: "topics",
          item_name: ${JSON.stringify(name)},
          column_values: ${JSON.stringify(JSON.stringify(columnValues))}
        ) { id }
      }
    `

    const res = await fetch(MONDAY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
        'API-Version': '2024-01',
      },
      body: JSON.stringify({ query: mutation }),
    })

    const data = await res.json()
    if (data.errors) {
      console.error('Monday API error:', data.errors)
      return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data.data?.create_item?.id })
  } catch (err) {
    console.error('Lead submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
