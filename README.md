# Crypto Checkout Experience

A modern, user-friendly crypto payment checkout interface built with Next.js 16 and React 19. This project provides a seamless experience for converting crypto to cash and sending cryptocurrency payments.

## Features

- **Crypto to Cash Conversion**: Convert cryptocurrency to fiat with real-time token selection
- **Multiple Wallet Support**: Integration with popular wallets (Metamask, Rainbow, WalletConnect, Binance, Coinbase, Bybit)
- **Token Selection**: Searchable dropdown for selecting from multiple cryptocurrencies (USDT-CELO, USDT-TON, USDT-BNB)
- **Payment Confirmation**: Clear payment details with copyable wallet addresses
- **Network Information**: Display network and wallet details for safe transactions
- **Responsive Design**: Mobile-first design that works on all devices
- **Tabbed Navigation**: Easy switching between different payment flows

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **React**: React 19 with Server Components
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui component library
- **TypeScript**: Type-safe development
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:


2. Install dependencies:

pnpm install


3. Run the development server:

pnpm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Home Page
Navigate to the home page to see links to both checkout flows.

### Crypto to Cash (`/crypto-to-cash`)
1. Enter the amount you want to pay
2. Select your cryptocurrency from the dropdown
3. Choose your wallet provider
4. Proceed with the transaction

### Send ETH (`/send-eth`)
1. View the destination wallet address
2. Verify the amount and network details
3. Review the important network warning
4. Confirm the transaction

## Project Structure

\`\`\`
├── app/
│   ├── crypto-to-cash/     # Crypto to cash conversion page
│   ├── send-eth/            # ETH sending confirmation page
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── crypto-dropdown.tsx  # Cryptocurrency selection dropdown
│   ├── wallet-dropdown.tsx  # Wallet provider selection
│   └── ui/                  # shadcn/ui components
└── README.md
\`\`\`

## Design System

The project uses a cohesive design system with:
- **Primary Color**: Teal/cyan accent (#14b8a6)
- **Typography**: Geist Sans for UI, Geist Mono for addresses
- **Spacing**: Consistent 8px grid system
- **Components**: Custom dropdowns, input fields, and buttons
- **Dark Mode Ready**: Design tokens support theme switching


