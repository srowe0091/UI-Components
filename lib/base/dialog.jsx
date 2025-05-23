import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '../utils'
import { CloseIcon } from '../icons'

import { Button } from './button'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ className, ...props }) => <DialogPrimitive.Portal className={cn(className)} {...props} />

const DialogOverlay = ({ className, ref, ...props }) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
)

const DialogContent = ({ className, children, ref, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'm-auto fixed w-full md:max-w-lg h-full md:h-auto md:max-h-[80%] left-0 top-0 md:top-[10%] right-0 z-50 flex flex-col gap-6 border bg-background p-6 shadow-lg sm:rounded-lg data-[state=open]:animate-scale-fade-in data-[state=closed]:animate-scale-fade-out',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close asChild className="absolute right-4 top-4 focus:outline-none disabled:pointer-events-none">
        <Button variant="ghost" size="icon-sm">
          <CloseIcon />
          <span className="sr-only">Close</span>
        </Button>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
)

const DialogHeader = ({ className, ...props }) => (
  <div className={cn('mb-2 flex flex-col space-y-4', className)} {...props} />
)

const DialogFooter = ({ className, ...props }) => (
  <div className={cn('flex flex-col-reverse md:flex-row md:justify-end gap-4', className)} {...props} />
)

const DialogTitle = ({ className, ref, ...props }) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
)

const DialogDescription = ({ className, ref, ...props }) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
)

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
