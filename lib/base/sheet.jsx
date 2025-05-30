import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'

import { Button } from './button'

import { CloseIcon } from '../icons'
import { cn } from '../utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({ className, ...props }) => <SheetPrimitive.Portal className={cn(className)} {...props} />

const SheetOverlay = ({ className, ref, ...props }) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
)

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background py-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left md:max-w-md',
        right:
          'inset-y-0 right-0 h-full w-full md:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right md:max-w-md'
      }
    },
    defaultVariants: {
      side: 'right'
    }
  }
)

const SheetContent = ({ side = 'right', className, children, ref, ...props }) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close
        asChild
        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <Button variant="ghost" size="icon-sm">
          <CloseIcon />
          <span className="sr-only">Close</span>
        </Button>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
)

const SheetHeader = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-2 px-6', className)} {...props} />
)

const SheetFooter = ({ className, ...props }) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)

const SheetTitle = ({ className, ref, ...props }) => (
  <SheetPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
)

const SheetDescription = ({ className, ref, ...props }) => (
  <SheetPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
)

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
