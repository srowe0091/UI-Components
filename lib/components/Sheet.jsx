import { Sheet as _Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../base/sheet'

export const Sheet = ({ trigger, header, children, ...rest }) => {
  return (
    <_Sheet {...rest}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </_Sheet>
  )
}
