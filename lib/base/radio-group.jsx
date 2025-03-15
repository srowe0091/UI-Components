import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { Label } from './label'

import { cn } from '../utils'
import { DotIcon } from '../icons'

const RadioGroup = ({ className, ref, ...props }) => {
  return <RadioGroupPrimitive.Root className={cn('flex flex-col gap-4', className)} {...props} ref={ref} />
}

const RadioGroupItem = ({ className, label, ref, ...props }) => {
  const htmlFor = React.useId()
  return (
    <Label htmlFor={htmlFor} className="flex items-center gap-2 self-start cursor-pointer">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={htmlFor}
        className={cn(
          'aspect-square h-5 w-5 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <DotIcon className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <span>{label}</span>
    </Label>
  )
}

export { RadioGroup, RadioGroupItem }
