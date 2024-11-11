import { createElement, forwardRef } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '../utils'
import { LoadingIcon } from '../icons'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/70 active:bg-primary/60 data-[state=open]:bg-primary/60',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-primary/30',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-primary/30 active:bg-primary/60 hover:text-primary-foreground data-[state=open]:bg-primary/60',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8'
      },
      position: {
        bottomLeft: 'fixed m-auto left-8 bottom-8 shadow-fab',
        bottomRight: 'fixed m-auto right-8 bottom-8 shadow-fab',
        toolbar: 'fixed m-auto left-0 right-0 bottom-14 shadow-fab'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = forwardRef(({ children, className, variant, size, loading, label, disabled, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn('relative gap-2', buttonVariants({ variant, size, className }), { 'text-transparent': loading })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="absolute right-1/2 translate-x-1/2 text-primary-foreground">
          <LoadingIcon className="h-6 w-6 animate-spin duration-500" />
        </span>
      )}
      {label ?? children}
    </button>
  )
})
Button.displayName = 'Button'

const Fab = forwardRef(({ icon, variant, position = 'bottomRight', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, position, size: 'icon' }), 'rounded-full h-12 w-12 z-20', className)}
      {...props}
    >
      {icon && createElement(icon)}
    </button>
  )
})

export { Button, Fab }
