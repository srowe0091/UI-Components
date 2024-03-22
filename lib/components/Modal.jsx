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
  activeModal: null,
  openModal: name => () => set({ activeModal: name }),
  closeModal: () => set({ activeModal: null }),
  toggleModal: curry((name, bool) => {
    if (!name) return
    set({ activeModal: bool ? name : null })
  })
}))

const closeModal = () => useModalStore.setState({ activeModal: null })
const openModal = name => () => useModalStore.setState({ activeModal: name })

export const Modal = ({ children, header, name, trigger, triggerRef, ...rest }) => {
  const { activeModal, toggle, closeModal } = useModalStore(state => ({
    activeModal: state.activeModal,
    toggle: state.toggleModal,
    closeModal: state.closeModal
  }))

  const props = { ...(name && { open: activeModal === name, onOpenChange: toggle(name) }), ...rest }

  useEffect(() => () => closeModal(), [])

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

Modal.closeModal = closeModal
Modal.openModal = openModal
