import React, { FC } from 'react'
import { Select } from '../Select'

type defaultProps = {
}

export const Card: FC<defaultProps> = () => {
  return (
    <section className="card">
      <h2>source &rarr; target</h2>

      <form>
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
