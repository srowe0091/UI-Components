import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '../utils'

const Progress = ({ className, value, indeterminate, ref, ...props }) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-1 w-full overflow-hidden rounded-full bg-primary/20',
      { 'bg-transparent': indeterminate },
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn('h-full w-full flex-1 bg-primary transition-all', {
        'bg-progressBar animate-indeterminateAnimation origin-[0%_50%]': indeterminate
      })}
      style={{ transform: `translateX(-${indeterminate ? 50 : 100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
)

export { Progress }
