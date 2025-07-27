import { useId } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/utils'
import { DotIcon } from '@/icons'
import { Label } from '@/base/label'

const RadioGroup = ({ className, ...props }) => {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-4', className)} {...props} />
}

const RadioGroupItem = ({ className, label, ...props }) => {
  const htmlFor = useId()
  return (
    <Label htmlFor={htmlFor} className="flex items-center gap-2 self-start cursor-pointer">
      <RadioGroupPrimitive.Item
        data-slot="radio-group-item"
        id={htmlFor}
        className={cn(
          'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center"
        >
          <DotIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <span>{label}</span>
    </Label>
  )
}

export { RadioGroup, RadioGroupItem }
