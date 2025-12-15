"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight } from "lucide-react"
import { CryptoDropdown } from "@/components/crypto-dropdown"
import { WalletDropdown } from "@/components/wallet-dropdown"
import { CurrencyDropdown } from "@/components/currency-dropdown"

export default function CryptoToCashPage() {
  const [activeTab, setActiveTab] = useState("crypto-to-cash")
  const [payAmount, setPayAmount] = useState("1.00")
  const [receiveAmount, setReceiveAmount] = useState("1.00")
  const [selectedCurrency, setSelectedCurrency] = useState("ETH")
  const [selectedDenomination, setSelectedDenomination] = useState("NGN")

  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-card rounded-3xl shadow-xl border border-border p-8">
          {/* Tabs */}
          <div className="flex w-fit m-auto gap-2 mb-8 bg-muted text-muted-foreground hover:bg-muted/80 rounded-full">
            <button
              onClick={() => setActiveTab("crypto-to-cash")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "crypto-to-cash"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Crypto to cash
            </button>
            <button
              onClick={() => setActiveTab("cash-to-crypto")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "cash-to-crypto"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Cash to crypto
            </button>
            <button
              onClick={() => setActiveTab("crypto-to-fiat")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "crypto-to-fiat"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Crypto to fiat loan
            </button>
          </div>

          {/* You pay section */}
          <div className="space-y-6">
            <div className=" rounded-4xl p-6 border border-border">
              <label className="text-sm font-semibold text-muted-foreground mb-2 block">You pay</label>
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="text-3xl font-semibold bg-transparent border-none outline-none flex-1 w-[60%]"
                />
                <CryptoDropdown selected={selectedCurrency} onSelect={setSelectedCurrency} />
              </div>
            </div>

            {/* Swap icon */}
            {/* <div className="flex justify-center -my-3 relative z-10">
              <button className="bg-accent hover:bg-accent/80 rounded-xl p-3 border-4 border-card shadow-md transition-transform hover:scale-110">
                <ArrowLeftRight className="w-5 h-5 text-accent-foreground" />
              </button>
            </div> */}

            {/* You receive section */}
            <div className=" rounded-4xl p-6 border border-border">
              <label className="text-sm font-semibold text-muted-foreground mb-2 block">You receive</label>
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  className="text-3xl font-semibold bg-transparent border-none outline-none flex-1 w-[60%]"
                />
                <CurrencyDropdown selected={selectedDenomination} onSelect={setSelectedDenomination} /> 
              </div>
            </div>

            {/* Pay from */}
            <div className="space-y-3">
              <label className="text-sm font-bold mb-3 text-foreground">Pay from</label>
              <WalletDropdown />
            </div>

            {/* Pay to */}
            <div className="space-y-3">
              <label className="text-sm font-bold mb-3 text-foreground">Pay to</label>
              <Select>
                <SelectTrigger className="h-20 p-6 mt-3 rounded-full w-full border-border">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank account</SelectItem>
                  <SelectItem value="card">Debit card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Continue button */}
            <Button size="lg" className="w-full h-14 rounded-full text-base font-semibold mt-6">
              Convert now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
