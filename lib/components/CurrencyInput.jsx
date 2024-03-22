import { useCallback, forwardRef, useMemo } from 'react'

import { Input } from '../base/input'

const toNumber = str => parseInt(typeof str === 'number' ? str : str.replace(/\D/g, ''), '10')
const currency = number => (typeof number === 'number' ? `$${(number / 100).toFixed(2)}` : null)

const currencyFormat = value => {
  const number = toNumber(value)
  return [currency(number, true), number]
}

export const CurrencyInput = forwardRef(({ onChange, value, ...rest }, ref) => {
  const _value = useMemo(() => currencyFormat(value)[0], [value])

  const _onChange = useCallback(e => onChange(currencyFormat(e.target.value)[1]), [onChange])

  return <Input inputMode="numeric" ref={ref} onChange={_onChange} value={_value} {...rest} />
})
