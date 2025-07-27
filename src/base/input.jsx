import { cn } from '@/utils'

function Input({ label, error, rightIcon, leftIcon, className, ...props }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        {label && <label htmlFor={props.name}>{label}</label>}
        <div className="relative">
          {leftIcon && <div className="absolute top-3 left-3">{leftIcon}</div>}
          <input
            data-slot="input"
            aria-invalid={!!error?.message}
            className={cn(
              'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'aria-invalid:ring-destructive dark:aria-invalid:ring-destructive aria-invalid:border-destructive',
              { 'pr-9': rightIcon },
              { 'pl-9': leftIcon },
              className
            )}
            {...props}
          />
          {rightIcon && <div className="absolute top-3 right-3">{rightIcon}</div>}
        </div>
      </div>
      {error?.message && (
        <small id={props.name + '-help'} className="block error mt-1">
          {error?.message}
        </small>
      )}
    </div>
  )
}

export { Input }
