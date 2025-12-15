"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, Search } from "lucide-react"

const cryptoOptions = [
  { id: "usdt-celo", name: "USDT - CELO", icon: "🟡" },
  { id: "usdt-ton", name: "USDT - TON", icon: "💎" },
  { id: "usdt-bnb", name: "USDT - BNB", icon: "🟠" },
  // { id: "eth", name: "ETH", icon: "⬥" },
]

interface CryptoDropdownProps {
  selected: string
  onSelect: (value: string) => void
}

export function CryptoDropdown({ selected, onSelect }: CryptoDropdownProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredOptions = cryptoOptions.filter((option) => option.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-10 p-2 bg-background rounded-full border-border hover:bg-muted/50 font-semibold"
        >
          <span className="mr-2">⬥</span>
          {selected}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-10 rounded-full"
            />
          </div>
        </div>
        <div className="max-h-60 overflow-y-auto p-2">
          {filteredOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onSelect(option.name.split(" - ")[0])
                setOpen(false)
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <span className="text-xl">{option.icon}</span>
              <span className="font-medium text-foreground">{option.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
