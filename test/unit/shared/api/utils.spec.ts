import { describe, expect, it } from 'vitest'
import { cleanDoubleSlashes } from '~/shared/api/helpers/instance'

describe('cleanDoubleSlashes function', () => {
  it('should remove consecutive double slashes', () => {
    const input = 'http://example.com//path//to//file'
    const expected = 'http://example.com/path/to/file'
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })

  it('should handle URLs with multiple protocols', () => {
    const input = 'http://https://example.com//path//to//file'
    const expected = 'http://https://example.com/path/to/file'
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })

  it('should handle empty string', () => {
    const input = ''
    const expected = ''
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })

  it('should handle URLs with no double slashes', () => {
    const input = 'http://example.com/path/to/file'
    const expected = 'http://example.com/path/to/file'
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })

  it('should handle URLs with trailing slashes', () => {
    const input = 'http://example.com/path/to/file///'
    const expected = 'http://example.com/path/to/file/'
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })

  it('should handle URLs with leading slashes', () => {
    const input = '//example.com/path//to//file'
    const expected = '/example.com/path/to/file'
    expect(cleanDoubleSlashes(input)).toBe(expected)
  })
})
