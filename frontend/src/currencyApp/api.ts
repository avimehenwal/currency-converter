import axios, { AxiosInstance } from 'axios'

// https://exchangerate.host/#/
interface queryString {
  base: string;
  symbols: string;
  amount: number;
  places?: number;
}

class Backend {
  api: AxiosInstance
  baseURL: string = 'https://api.exchangerate.host'
  timeout: number = 1000
  headers: object = { 'Content-Type': 'application/json' }

  constructor() {
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: this.headers
    });
  }

  getCall = async (queryString: queryString) => {
    try {
      const response = await this.api.get("/latest", { params: queryString });
      const data = await response.data
      return data
    } catch (error) {
      console.error(error);
    }
  }

  convertCurrency = async () => {
    const qs: queryString = {
      base: 'USD',
      symbols: 'USD,EUR,CZK',
      amount: 1200,
      places: 2
    }
    return this.getCall(qs)
  }

}

export const be = new Backend()