import { useEffect } from 'react'
import { create } from 'zustand'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../base/dialog'
import { cn } from '../utils'

const curry = func => {
  const expectedArgs = func.length
  const curried = (...args) => {
    return args.length >= expectedArgs ? func(...args) : (...args2) => curried(...args.concat(args2))
  }
  return curried
}

const useModalStore = create(set => ({
  meta: null,
  activeModal: null,
  toggleModal: curry((name, bool) => {
    if (!name) return
    set({
      activeModal: bool ? name : null,
      ...(bool === false && { meta: null })
    })
  })
}))

export const Modal = ({ children, header, name, trigger, triggerRef, ...rest }) => {
  const { activeModal, toggle } = useModalStore(state => ({
    activeModal: state.activeModal,
    toggle: state.toggleModal
  }))

  const props = { ...(name && { open: activeModal === name, onOpenChange: toggle(name) }), ...rest }

  useEffect(() => () => Modal.closeModal(), [])

  return (
    <Dialog {...props}>
      <DialogTrigger ref={triggerRef} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  )
}

export const ModalContent = ({ children, className }) => (
  <div className={cn('h-full flex flex-col gap-4 overflow-hidden', className)}>{children}</div>
)

export const ModalFooter = DialogFooter

Modal.closeModal = () => useModalStore.setState({ activeModal: null, data: null })
Modal.openModal = (name, meta) => () => useModalStore.setState({ activeModal: name, meta })
Modal.meta = () => useModalStore.getState().meta
