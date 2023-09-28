import process from 'node:process'

export const BASE_URL = process.env.BASE_URL ?? ''

export const BASE_URL_WITH_SLASH = BASE_URL ? `/${BASE_URL}/` : ''
