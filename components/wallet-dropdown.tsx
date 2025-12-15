"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const walletOptions = [
  { id: "metamask", name: "Metamask", icon: "🦊" },
  { id: "rainbow", name: "Rainbow", icon: "🌈" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔵" },
  { id: "other", name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "💼" },
]

export function WalletDropdown() {
  const [selected, setSelected] = useState("")

  return (
    <Select value={selected} onValueChange={setSelected} >
      <SelectTrigger className="h-20 p-6 rounded-full mt-3 border-border w-full">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {walletOptions.map((wallet) => (
          <SelectItem key={wallet.id} value={wallet.id} className="cursor-pointer">
            <div className="flex items-center gap-3 py-1">
              <span className="text-lg">{wallet.icon}</span>
              <span className="font-medium">{wallet.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
