import React from 'react'
import Home from '../src/old_pages_backup/Home'

export const metadata = {
  title: 'Running to God - A Journey of Faith Through the Australian Outback',
  description: 'An Australian outback road trip from Perth to Port Lincoln, exploring faith, purpose, and the spiritual journey of running from ourselves into the arms of God.',
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Running to God Ministry",
  "url": "https://runningtogod.faith",
  "logo": "https://runningtogod.faith/running-to-god-icon.svg",
  "description": "A Christian ministry sharing faith through stories of an Australian outback road trip journey, exploring how we can run from ourselves and into the loving arms of God.",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Ministry Support",
    "email": "contact@runningtogod.faith",
    "availableLanguage": "English"
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Home />
    </>
  )
}
