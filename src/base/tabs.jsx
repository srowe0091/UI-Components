import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/utils'

const Tabs = ({ className, ...props }) => {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-2', className)} {...props} />
}

const TabsList = ({ className, ...props }) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'w-full inline-flex justify-start text-muted-foreground gap-2 mb-4',
        className
      )}
      {...props}
    />
  )
}

const TabsTrigger = ({ className, ...props }) => {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 md:flex-none rounded-md inline-flex items-center justify-center border border-transparent hover:border-primary whitespace-nowrap px-6 py-1.5 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=active]:outline-0 data-[state=active]:bg-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  )
}

const TabsContent = ({ className, ...props }) => {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('flex-1 outline-none', className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
