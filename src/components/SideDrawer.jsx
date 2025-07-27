import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/base/sheet'

export const SideDrawer = ({ trigger, header, children, ...rest }) => {
  return (
    <Sheet {...rest}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        <div className="h-full overflow-y-auto p-6">{children}</div>
      </SheetContent>
    </Sheet>
  )
}
