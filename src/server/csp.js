export default {
  directives: {
    defaultSrc: ["'none'"],
    connectSrc: ["'self'", 'https://sp.zalo.me', 'https://za.zalo.me', 'https://www.googleapis.com', 'https://www.google-analytics.com'],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://unpkg.com',
      'https://www.gstatic.com',
      'https://www.google.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://storage.googleapis.com',
      'https://sp.zalo.me',
      'https://stc.za.zaloapp.com'
    ],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://unpkg.com', 'https://fonts.googleapis.com', 'https://use.fontawesome.com'],
    fontSrc: ["'self'", 'https://fonts.gstatic.com', 'https://use.fontawesome.com'],
    frameSrc: ["'self'", 'https://sp.zalo.me', 'https://za.zalo.me', 'https://www.google.com', 'https://www.facebook.com'],
    mediaSrc: ["'self'"],
    imgSrc: ['*', 'data:']
  }
}
