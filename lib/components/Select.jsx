import { forwardRef } from 'react'
import { Select as ShSelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../base/select'

export const Select = forwardRef(({ label, placeholder, options, onChange, ...props }, ref) => {
  return (
    <ShSelect onValueChange={onChange} {...props}>
      <div className="flex flex-col gap-1 my-1 w-full">
        <label>{label}</label>
        <SelectTrigger ref={ref}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </div>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShSelect>
  )
})
