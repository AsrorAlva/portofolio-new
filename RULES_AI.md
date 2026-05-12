# THE "Elegant Streetwear" RULES

## GLOBAL & COLOR
background: #0a0a0a (Pure Metal Black)
text: #f5f5f5 (Smoke White)
accent: #b2945e (Vintage Gold)
visual style : Clean borders, besar di tipografi, minim shadow, fokus ke spacing.

## THE "Blur" HEADER (Tailwind Implementation)
Untuk navbarnya, jangan cuma bg-black. Gunakan kombinasi ini:
1. Sticky Position: sticky top-0 z-50.
2. Glass Effect: bg-[#0a0a0a]/70 (hitam transparan 70%) dipadu dengan backdrop-blur-md.
3. Border: Tambahin border bawah tipis biar makin tegas: border-b border-white/10.

## TYPOGRAPHY & BRANDING
Headings: Gunakan font yang berani dan bold. Disarankan 'Inter' atau 'Syne' dengan font-black dan tracking-tighter.
Body: 'Inter' atau 'Montserrat' dengan font-light atau font-normal.
Style: Judul section dibuat besar (XL-text) ala poster streetwear.

## LAYOUT STRATEGY (TAILWIND CSS)
Global: bg-[#0a0a0a] text-[#f0f0f0] selection:bg-[#c5a059] selection:text-black.
Navbar: Minimalist, sticky, atau floating. Ganti justify-center menjadi justify-between dengan logo di kiri dan menu di kanan untuk kesan profesional, atau tetap center tapi dengan padding yang luas.
Hero Section: Tiru PTV Merch—fokus ke visual besar atau tipografi yang impactful. Jangan cuma teks di tengah.
Components: Gunakan border tipis (border-[0.5px] border-white/10) daripada bayangan (shadow) untuk kesan clean dan modern.

## Technical Instructions
Framework: React + Vite + Tailwind CSS.

Animations: Gunakan Framer Motion untuk smooth scroll atau fade-in tipis-tipis biar nggak kaku.

New Features: Kalau mau tambah fitur interaktif (misal: cursor follower atau image hover effect), tanyakan dulu.

Creative Freedom: Silahkan improvisasi UI selama tetap dalam koridor Dark-Minimalist Streetwear. Tambahkan file baru jika perlu untuk menjaga kebersihan kode (modular).


