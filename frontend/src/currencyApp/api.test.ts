import { jest } from '@jest/globals';
import { be } from './api'

test('sample test', () => {
  expect(1 + 2).toBe(3);
})

test('convert USD -> CZk,EUR and USD', async () => {
  const actual = await be.convertCurrency()
  const expected = {
    success: true,
    base: 'USD',
    date: expect.any(String),
    rates: {
      CZK: expect.any(Number),
      EUR: expect.any(Number),
      USD: expect.any(Number)
    }
  }
  console.dir(actual);
  expect(actual).toMatchObject(expected)
})

