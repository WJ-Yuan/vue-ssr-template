import { numberFormat } from '@/utils'
import { describe, it, expect } from 'vitest'

describe('format test', () => {
  describe('numberFormat', () => {
    it('should return an empty string when num is undefined or null', () => {
      expect(numberFormat()).toBe('')
      expect(numberFormat(null as unknown as undefined)).toBe('')
    })

    it('should format the number with comma separated digits', () => {
      expect(numberFormat(2345)).toBe('2,345')
      expect(numberFormat(2345678)).toBe('2,345,678')
    })
  })
})
