import { useId } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/utils'
import { CheckIcon } from '@/icons'
import { Label } from '@/base/label'

const Checkbox = ({ className, children, ...props }) => {
  const htmlFor = useId()
  return (
    <Label htmlFor={htmlFor} className="peer flex items-center gap-2 cursor-pointer">
      <CheckboxPrimitive.Root
        id={htmlFor}
        data-slot="checkbox"
        className={cn(
          'peer size-5 border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span>{children}</span>
    </Label>
  )
}

export { Checkbox }
