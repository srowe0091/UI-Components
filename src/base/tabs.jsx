import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../utils'

const Tabs = TabsPrimitive.Root

const TabsList = ({ className, ref, ...props }) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('w-full inline-flex justify-start text-muted-foreground gap-2 mb-4', className)}
    {...props}
  />
)

const TabsTrigger = ({ className, ref, ...props }) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex-1 md:flex-none rounded-md inline-flex items-center justify-center border border-transparent hover:border-primary whitespace-nowrap px-6 py-1.5 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=active]:outline-0 data-[state=active]:bg-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
)

const TabsContent = ({ className, ref, ...props }) => (
  <TabsPrimitive.Content ref={ref} className={className} {...props} />
)

export { Tabs, TabsList, TabsTrigger, TabsContent }
