import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { cn } from '../utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }