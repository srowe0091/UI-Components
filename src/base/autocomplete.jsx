import { useCallback, useMemo, useState } from 'react'

import { ArrowDownIcon, CheckIcon } from '../icons'
import { cn } from '../utils'

import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandLoading } from './command'

const AutoComplete = ({
  ref,
  async,
  multiple,
  options,
  placeholder,
  isLoading,
  value,
  onChange,
  onInputChange,
  defaultOpen
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false)

  const _value = useMemo(() => {
    return multiple ? value?.join(', ') : value
  }, [multiple, value])

  const onSelect = useCallback(
    selectedOption => {
      onInputChange?.('')
      if (multiple) {
        if (value.includes(selectedOption)) {
          onChange(value.filter(v => v !== selectedOption))
        } else {
          onChange(value.concat(selectedOption))
        }
        return
      } else {
        onChange(selectedOption === value ? '' : selectedOption)
      }
      setOpen(false)
    },
    [multiple, value, onChange, onInputChange]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-auto text-left"
        >
          {_value || placeholder}

          <ArrowDownIcon className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command shouldFilter={!async}>
          <CommandInput onValueChange={onInputChange} />
          <CommandList>
            {!isLoading && <CommandEmpty>No results</CommandEmpty>}
            {isLoading && <CommandLoading>Searching....</CommandLoading>}
            <CommandGroup>
              {options.map(option => (
                <CommandItem key={option.value} onSelect={onSelect}>
                  {option.label}
                  <CheckIcon
                    className={cn('ml-auto h-4 w-4', value.includes(option.value) ? 'opacity-100' : 'opacity-0')}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { AutoComplete }
