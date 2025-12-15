"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Info } from "lucide-react"
import Link from "next/link"

export default function SendEthPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const address = "4LiV4Yjbxsl6739MKghUd"
  const amount = "100 ETH"

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-card rounded-3xl shadow-xl border border-border p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12 ">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-medium text-[#013941] font-semibold w-[80%] text-center">Send ETH to the address below</h1>
          </div>

          {/* Address display */}
          <div className="mb-6 w-62.5 text-[10px] m-auto">
            <button
              onClick={() => handleCopy(address, "address")}
              className="w-full rounded-full bg-[#E6FBF2] hover:bg-accent/70  px-4 py-3 flex items-center justify-center m-auto gap-3 transition-colors group"
            >
              <span className="text-accent-foreground font-semibold font-mono">{address}</span>
              <Copy className="w-4 h-4 text-accent-foreground/70 group-hover:text-accent-foreground transition-colors flex-shrink-0" />
            </button>
          </div>

          {/* Payment details */}
          <div className="space-y-4 mb-6 bg-muted/50 rounded-md p-4">
            <div className="rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Amount to send</span>
                <button
                  onClick={() => handleCopy(amount, "amount")}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className="font-semibold text-text-muted-foreground">{amount}</span>
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className=" rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Network</span>
                <span className="font-semibold text-muted-foreground">ETH</span>
              </div>
            </div>

            <div className="rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Wallet</span>
                <span className="font-semibold text-muted-foreground">Other</span>
              </div>
            </div>
          </div>

          {/* Warning message */}
          <div className=" dark:bg-amber-950/20 dark:border-amber-900 rounded-xl p-4 flex gap-3 mb-8">
            <Info className="w-5 h-5 dark:text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] dark:text-amber-200 leading-relaxed">
              Only send <span className="font-semibold">(USDT)</span> to this address. Ensure the sender is on the{" "}
              <span className="font-semibold">(CELO)</span> network otherwise you might lose your deposit
            </p>
          </div>

          {/* Confirmation button */}
          <Button size="lg" className="w-full h-14 rounded-xl text-base ">
            I have sent it
          </Button>
        </div>
      </div>
    </div>
  )
}
