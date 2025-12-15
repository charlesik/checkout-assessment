import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Crypto Checkout</h1>
          <p className="text-muted-foreground text-lg">Select a demo screen to preview</p>
        </div>

        <div className="flex flex-col gap-4 pt-8">
          <Link href="/crypto-to-cash" className="w-full">
            <Button size="lg" className="w-full">
              Crypto to Cash Conversion
            </Button>
          </Link>
          <Link href="/send-eth" className="w-full">
            <Button size="lg" variant="outline" className="w-full bg-transparent">
              Send ETH Confirmation
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
