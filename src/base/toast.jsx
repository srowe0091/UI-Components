import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'

import { cn } from '../utils'
import { CloseIcon } from '../icons'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = ({ className, ref, ...props }) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex gap-4 max-h-screen w-full flex-col-reverse p-4 sm:bottom-auto sm:right-0 sm:top-0 sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
)

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
        success: 'bg-green-700 border-green-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Toast = ({ className, variant, ref, ...props }) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
}

const ToastAction = ({ className, ref, ...props }) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 font-medium transition-colors hover:bg-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground',
      className
    )}
    {...props}
  />
)

const ToastClose = ({ className, ref, ...props }) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50',
      className
    )}
    toast-close=""
    {...props}
  >
    <CloseIcon className="h-4 w-4" />
  </ToastPrimitives.Close>
)

const ToastTitle = ({ className, ref, ...props }) => (
  <ToastPrimitives.Title ref={ref} className={cn('font-semibold', className)} {...props} />
)

const ToastDescription = ({ className, ref, ...props }) => (
  <ToastPrimitives.Description ref={ref} className={cn('opacity-90', className)} {...props} />
)

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction }
