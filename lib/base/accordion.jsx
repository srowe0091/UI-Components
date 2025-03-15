import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '../utils'
import { ArrowDownIcon } from '../icons'

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({ className, ref, ...props }) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
)

const AccordionTrigger = ({ className, children, ref, ...props }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center gap-3 py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ArrowDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

const AccordionContent = ({ className, children, ref, ...props }) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
