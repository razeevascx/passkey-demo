<div align="center">

# PASSKEY DEMO

_Exploring the Future of Passwordless Authentication_

![Last Commit](https://img.shields.io/github/last-commit/razeevascx/passkey-demo?label=last%20commit&color=blue&style=flat-square)
![TypeScript](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/next.js-15.5.4-black?style=flat-square&logo=next.js)

**Built with the tools and technologies:**

![Next.js](https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/-React-blue?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![WebAuthn](https://img.shields.io/badge/-WebAuthn-FF6B35?style=flat-square)
![Biome](https://img.shields.io/badge/-Biome-60A5FA?style=flat-square&logo=biome)

</div>

## Project Overview

PasskeyDemo is a comprehensive demonstration of modern passwordless authentication using the WebAuthn API and passkeys. This educational platform helps developers understand and implement secure, user-friendly authentication without traditional passwords.

## Key Features

- **🔐 Passwordless Authentication** - Complete WebAuthn implementation with passkey registration and authentication flows
- **📚 Educational Content** - In-depth explanation of passkey technology, security benefits, and implementation best practices
- **🎨 Modern UI Components** - Responsive design with Tailwind CSS, custom typography system, and interactive elements
- **🔧 Developer-Ready** - TypeScript definitions, Biome linting, and production-optimized build setup

## Technology Stack

- **Frontend:** Next.js 15.5.4, React 19.1.0, TypeScript 5
- **Styling:** Tailwind CSS 4, class-variance-authority, clsx, tailwind-merge
- **Authentication:** WebAuthn API, Platform Authenticators
- **Animations:** Motion (Framer Motion successor)
- **Development:** Biome 2.2.0 (linting & formatting), Turbopack
- **Icons:** Lucide React

## Routes

| Route          | Description    | Features                                                                            |
| -------------- | -------------- | ----------------------------------------------------------------------------------- |
| **`/`**        | Homepage       | Hero section with project introduction and navigation                               |
| **`/passkey`** | Main Demo Page | Complete passkey tutorial, interactive authentication demo, and educational content |

### Route Details

#### Homepage (`/`)

- Welcome interface with project overview
- Navigation to demo page
- Dot pattern background animation

#### Passkey Demo (`/passkey`)

- **Educational Content:**
  - What are passkeys and how they work
  - Security advantages over traditional passwords
  - Step-by-step usage instructions
  - Real-world examples and supported services
- **Interactive Demo:**
  - Live passkey registration
  - Authentication testing
  - Error handling demonstration
- **Visual Elements:**
  - Glass-card design components
  - Responsive grid layouts
  - Typography system showcase

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/razeevascx/passkey-demo.git
   ```

2. **Navigate to Project**

   ```bash
   cd passkey-demo
   ```

3. **Install Dependencies**

   ```bash
   pnpm install
   ```

4. **Start Development Server**

   ```bash
   pnpm dev
   ```

5. **Verify Installation**
   - Open browser: http://localhost:3000
   - Navigate to `/passkey` to test passkey functionality
   - Ensure your browser supports WebAuthn (Chrome 67+, Firefox 60+, Safari 14+)

## Available Scripts

```bash
pnpm dev

pnpm build

pnpm start

pnpm lint

pnpm format
```

## Browser Requirements

- **Chrome:** Version 67 or later
- **Firefox:** Version 60 or later
- **Safari:** Version 14 or later
- **Edge:** Version 18 or later

**Note:** Passkeys work best on devices with biometric authentication (Touch ID, Face ID, Windows Hello) or security keys.
