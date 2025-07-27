import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import { cn } from '@/utils'

const Collapsible = ({ ...props }) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

const CollapsibleTrigger = ({ ...props }) => {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />
}

const CollapsibleContent = ({ className, ...props }) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        'data-[state=closed]:overflow-hidden data-[state=open]:animate-collapse-open data-[state=closed]:animate-collapse-close',
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
