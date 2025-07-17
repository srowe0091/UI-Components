import { cva } from 'class-variance-authority'

import { cn } from '../utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        warning: 'border-transparent bg-orange-500 text-white hover:bg-orange-500/80'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Badge = ({ className, variant, ref, ...props }) => {
  return <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
