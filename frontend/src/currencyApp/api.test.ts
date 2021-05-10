import { jest } from '@jest/globals';
import { dir } from 'console';
import { be, queryString } from './api'


describe('Backend API TestSuite', () => {

  const expectedRes = {
    motd: {
      msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
      url: 'https://exchangerate.host/#/donate'
    },
    success: true,
    base: 'USD',
    date: expect.any(String),
    rates: {
      CZK: expect.any(Number),
      EUR: expect.any(Number),
      USD: expect.any(Number)
    }
  }

  test('sample test', () => {
    expect(1 + 2).toBe(3);
  })

  test('call convert method without any arguments', async () => {
    const actual = await be.convertCurrency()
    // console.dir(actual);
    expect(actual).toMatchObject(expectedRes)
  })

  test('convert EUR -> USD', async () => {
    const params: queryString = {
      base: 'EUR',
      symbols: 'USD',
      amount: 1200,
      places: 2
    }
    const actual = await be.convertCurrency(params)
    const expected = {
      ...expectedRes,
      base: 'EUR',
      rates: {
        USD: expect.any(Number)
      }
    }
    // console.dir(expected)
    expect(actual).toMatchObject(expected)
  })

})