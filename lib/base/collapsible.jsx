import * as React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import { cn } from '../utils'

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = ({ className, ref, ...props }) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      className={cn(
        'data-[state=closed]:overflow-hidden data-[state=open]:animate-collapse-open data-[state=closed]:animate-collapse-close',
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
