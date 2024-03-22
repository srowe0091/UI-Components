import { cn } from '../utils'

const Divider = ({ className }) => {
  return (
    <div className={cn('py-4', className)}>
      <div className="border-t" />
    </div>
  )
}

export { Divider }
