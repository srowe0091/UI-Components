import { createElement, useCallback, useState } from 'react'

import { cn } from '../utils'
import { Button } from '../base/button'
import { Fade } from '../components/Fade'

const Item = ({ icon, label, className, ...rest }) => {
  return (
    <div className={cn('flex flex-row items-center gap-2', className)}>
      <p className="text-shadow-boldText font-bold">{label}</p>

      <Button size="icon-lg" className={cn('bg-primary rounded-full', className)} {...rest}>
        {icon && createElement(icon)}
      </Button>
    </div>
  )
}

export const SpeedDial = ({ items, trigger }) => {
  const [isOpen, updateState] = useState(false)

  const toggle = useCallback(() => updateState(state => !state), [])
  const close = useCallback(() => updateState(false), [])

  return (
    <div className="absolute bottom-10 right-8 z-40">
      <div className="flex justify-end relative">
        <Fade in={isOpen}>
          <div onClick={close} className={cn('bg-black/80 h-screen w-screen fixed top-0 left-0')} />

          <div className={cn('bottom-[66px] right-[0] absolute w-max flex flex-col-reverse items-end gap-4')}>
            {items?.map(item => (
              <div key={item.label} onClick={close}>
                <Item {...item} />
              </div>
            ))}
          </div>
        </Fade>

        <div className={cn('transition-all z-50', { 'rotate-90': isOpen })} onClick={toggle}>
          {trigger}
        </div>
      </div>
    </div>
  )
}
