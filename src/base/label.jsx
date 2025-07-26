import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '../utils'

const Label = ({ className, ref, ...props }) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn('font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
    {...props}
  />
)

export { Label }
