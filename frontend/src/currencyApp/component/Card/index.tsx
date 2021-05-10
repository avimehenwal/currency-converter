import React, { FC, useState } from 'react'
import { Select } from '../Select'
import { be, queryString } from '../../api'


type defaultProps = {
}

export const Card: FC<defaultProps> = () => {
  const [formData, setFormData] = useState<queryString>()
  const [results, setResults] = useState()

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    const { source, amount, target } = event.target.elements
    const formData: queryString = {
      base: source.value,
      symbols: target.value,
      amount: amount.value
    }
    // console.log(`source=${source.value} amount=${amount.value} target=${target.value}`);
    setFormData(formData)

    const apiResults = async () => {
      const response = await be.convertCurrency(formData)
      setResults(response.rates[formData.symbols])
      console.dir(results)
    }
    apiResults();
    event.preventDefault();
  }

  return (
    <section className="card">

      <div>
        <h3>{formData?.amount} {formData?.base} &rarr; equals  </h3>
        <h2>{results} {formData?.symbols}</h2>
      </div><br />

      <form name="converter" onSubmit={formHandler}>
        <label htmlFor="source">Source </label>
        <Select name="source" />
        <input name="amount" type="number"></input>
        <Select name="target" />
        <label htmlFor="target"> Target</label>

        <br></br><br></br><br></br>
        <input type="submit" value="convert" />
        <input type="reset" />
      </form>

      <br></br>
      <pre className="footer">{JSON.stringify(formData, null, 0)}</pre>
      {/* <pre>{JSON.stringify(results, null, 0)}</pre> */}
    </section>
  )
}
