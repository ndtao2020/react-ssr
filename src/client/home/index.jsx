import React from 'react'
import { hydrate } from 'react-dom'
import App from '@/shared/pages/home'

const id = document.getElementById('root')

hydrate(<App {...window.__DATA__} />, id)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('@/shared/pages/home', () => import('@/shared/pages/home').then((e) => hydrate(<e.default {...window.__DATA__} />, id)))
}
