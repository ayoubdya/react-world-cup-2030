import currencies from "@/lib/currencies.json";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface CurrencySelectorProps {
  code: string;
  setCode: (code: string) => void;
  disabled?: boolean;
  className?: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  code,
  setCode,
  className,
  disabled,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] h-14 justify-between font-bold  border-4 border-gray-300",
            className
          )}
          disabled={disabled}
        >
          <span className="">
            {code
              ? `${
                  currencies.find((currency) => currency.code === code)?.label
                }`
              : "Select currency..."}
          </span>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandEmpty>No currency found.</CommandEmpty>
          <CommandGroup className="h-[400px] overflow-y-scroll">
            {currencies.map((currency) => (
              <CommandItem
                key={currency.code}
                value={currency.code}
                onSelect={(_currentCode) => {
                  const currentCode = _currentCode.toUpperCase();
                  setCode(currentCode === code ? "" : currentCode);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    code === currency.code ? "opacity-100" : "opacity-0"
                  )}
                />
                {currency.code} - {currency.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CurrencySelector;
