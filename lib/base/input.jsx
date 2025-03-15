import { cn } from '../utils'

const Input = ({ label, error, rightIcon, leftIcon, className, ref, ...props }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        {label && <label htmlFor={props.name}>{label}</label>}
        <div className="relative">
          {leftIcon && <div className="absolute top-3 left-3">{leftIcon}</div>}
          <input
            ref={ref}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background placeholder:text-muted-foreground hover:ring-2 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
              { 'border-red-500 ring-red-500 ring-2': !!error?.message },
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
