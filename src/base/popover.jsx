import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/utils'

const Popover = ({ ...props }) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

const PopoverTrigger = ({ ...props }) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

const PopoverContent = ({ className, align = 'center', sideOffset = 4, ...props }) => {
  return (
    <PopoverPrimitive.Portal className='WHAT'>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-primary text-primary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-(--radix-popper-anchor-width) origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

const PopoverAnchor = ({ ...props }) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
