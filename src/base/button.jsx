import { createElement } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/utils'
import { LoadingIcon } from '@/icons'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/70',
        dark: 'bg-black text-primary-foreground shadow hover:bg-black/70 active:bg-black/60',
        darkOutline: 'border border-black bg-transparent shadow-sm hover:bg-black/30 active:bg-black/20',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        'icon-sm': 'size-8',
        icon: 'size-10',
        'icon-lg': 'size-12 [&>*]:size-5'
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

const Button = ({ children, className, variant, size, loading, label, disabled, ref, ...props }) => {
  return (
    <button
      ref={ref}
      className={cn('relative gap-2', buttonVariants({ variant, size, className }), { 'text-transparent': loading })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="absolute right-1/2 translate-x-1/2 text-primary-foreground">
          <LoadingIcon className="size-6 animate-spin duration-500" />
        </span>
      )}
      {label ?? children}
    </button>
  )
}

const Fab = ({ icon, variant, position = 'bottomRight', className, ref, ...props }) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, position, size: 'icon' }), 'rounded-full size-12 z-20', className)}
      {...props}
    >
      {icon && createElement(icon)}
    </button>
  )
}

export { Button, buttonVariants, Fab }
