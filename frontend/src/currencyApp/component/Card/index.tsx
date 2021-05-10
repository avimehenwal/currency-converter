import React, { FC } from 'react'
import { Select } from '../Select'

type defaultProps = {
}

export const Card: FC<defaultProps> = () => {

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    const { source, amount, target } = event.target.elements
    console.log(`source=${source.value} amount=${amount.value} target=${target.value}`);
    event.preventDefault();
  }

  return (
    <section className="card">
      <h2>source &rarr; target</h2>

      <form name="converter" onSubmit={formHandler}>
        <label htmlFor="source">Source </label>
        <Select name="source" />
        <input name="amount" type="number"></input>
        <Select name="target" />
        <label htmlFor="target"> Target</label>

        <br></br><br></br>
        <input type="submit" value="convert" />
      </form>

    </section>
  )
}
