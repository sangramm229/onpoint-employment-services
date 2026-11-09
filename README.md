# ONPOINT EMPLOYMENT SERVICES
### Premium Corporate Portfolio Website

An executive, modern, fully responsive company portfolio website for **ONPOINT EMPLOYMENT SERVICES**, a premier recruitment and employment consultancy based in **Narhe, Pune, Maharashtra, India**.

> **Note on Website Scope:**
> This website is strictly an informational company portfolio. It intentionally contains **no** job application forms, **no** student registration, **no** candidate/employer logins, and **no** database or backend dependencies. Its core purpose is to professionally showcase the company's brand, leadership under **Director Shalan Hingmire**, 10 recruitment services, achievements, and direct communication channels.

---

## 🏢 Company Profile

- **Company Name:** ONPOINT EMPLOYMENT SERVICES
- **Director:** Shalan Hingmire
- **Hiring Manager:** Pratiksha Kanunje
- **Helpline / Phone:** [+91 9359710076](tel:+919359710076)
- **WhatsApp Direct:** [wa.me/919359710076](https://wa.me/919359710076)
- **Official Email:** [onpointemployments@gmail.com](mailto:onpointemployments@gmail.com)
- **Headquarters Location:** Narhe, Pune, Maharashtra, India
- **Industry:** Recruitment, Employment Services & Placement Consultancy
- **Suggested Domain:** `www.onpointemployments.com`

---

## 🎨 Official Brand Identity & Design System

The visual identity is anchored directly on the official logo specifications:
- **Logo Elements:**
  - Navy-blue location pin representing strategic placement in Pune
  - Golden-yellow checkmark symbolizing verified employment & trust
  - **ONPOINT** typography in deep navy blue (`#06466B`)
  - **EMPLOYMENT SERVICES** subtitle in golden yellow (`#F5C52E`)
- **Corporate Color Palette:**
  - **Navy Blue:** `#06466B`
  - **Dark Navy:** `#092B46`
  - **Golden Yellow:** `#F5C52E`
  - **White:** `#FFFFFF`
  - **Light Grey:** `#F5F7FA`
  - **Midnight Navy (Footer/Accents):** `#041829`
- **Typography:**
  - Headings: `Poppins`, `Plus Jakarta Sans`
  - Body & UI: `Plus Jakarta Sans`, `Inter`

---

## 🚀 Key Features

1. **Sticky Navigation Bar:**
   - Real-time scroll blur & glassmorphism
   - Quick contact bar (Phone, Email, Location, WhatsApp)
   - Responsive mobile navigation drawer with animated transitions
2. **Homepage Hero Section:**
   - Headline: *"Connecting Talent With Opportunities"*
   - Subheading: *"Empowering Careers. Connecting Talent. Building Professional Futures."*
   - Description: Focused on bridging the gap between talent and organizations
   - Interactive 3D floating badges, executive card composite, and dual CTAs
3. **About Our Company:**
   - Official *"Who We Are"* overview
   - Guiding Mission & Vision
   - Core Values (Integrity & Ethics, Candidate-Centricity, Corporate Dependability, Continuous Empowerment)
   - 4-Step Recruitment Approach (Requirement Analysis → Profile Mapping → Interview Guidance → Placement Coordination)
4. **Our 10 Core Services:**
   - Job Placement Assistance
   - Fresher Recruitment
   - Experienced Candidate Recruitment
   - Internship Assistance
   - Resume Preparation Guidance
   - Interview Preparation
   - Career Guidance
   - Corporate Recruitment
   - HR Recruitment Solutions
   - Employment Consultancy
   - Includes real-time search, category filtering (Candidates vs. Employers), and an interactive **Service Inquiry Modal** with pre-filled WhatsApp & Email inquiry dispatchers
5. **Leadership & Management Showcase:**
   - **Director Shalan Hingmire:** Executive portrait, biography, strategic responsibilities, and official Director's message.
   - **Hiring Manager Pratiksha Kanunje:** Operational recruitment lead overseeing candidate screening, employer coordination, and interview operations.
6. **Achievements & Placement Highlights:**
   - Transparent, editable numerical milestones
   - 6 Key Industry Verticals (IT/Software, Manufacturing, BFSI, Customer Support/BPO, Healthcare, Retail)
   - General, ethical candidate success themes
   - Verified Corporate Placement Network section
7. **Why Choose Onpoint:**
   - 6 distinct competitive advantages with modern corporate iconography
8. **Contact Us & Location Coordinates:**
   - One-click **Call Now** (`tel:+919359710076`), **WhatsApp** (`wa.me`), and **Email** (`mailto`) actions
   - Interactive Google Map embed centered on Narhe, Pune
   - Direct message composer (dispatches pre-filled inquiry to WhatsApp or email client without database storage)
   - Editable social media placeholders
9. **Floating Quick Actions:**
   - Persistent WhatsApp action button with pulsing indicator
   - Quick Call button
   - Back-to-top button
10. **Technical & SEO Foundation:**
    - Full Open Graph (OG) and Twitter Card tags
    - Targeted Pune placement and recruitment keywords
    - `robots.txt` and `sitemap.xml`
    - SPA rewrite rules in `vercel.json`

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS & PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (v6)

---

## 📂 Project Architecture

```
ONPOINT/
├── public/
│   ├── favicon.svg          # Official icon crop (pin + checkmark)
│   ├── logo.svg             # Official vector logo (navy on white)
│   ├── logo-white.svg       # Official vector logo for dark backgrounds
│   ├── robots.txt           # SEO crawler directions
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── about/           # AboutOverview, MissionVision, CoreValues
│   │   ├── common/          # Logo, Navbar, Footer, FloatingActions, SectionHeading, ServiceInquiryModal
│   │   ├── contact/         # ContactCards, QuickInquiryForm, MapSection
│   │   ├── home/            # HeroSection, IntroStatsBanner, WhyChooseUs, AchievementsPreview
│   │   ├── services/        # ServiceCard
│   │   └── team/            # LeaderCard
│   ├── data/
│   │   └── companyData.ts   # ⭐ SINGLE SOURCE OF TRUTH (easily edit all content)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── AchievementsPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx              # Router setup & layout
│   ├── main.tsx             # React entrypoint
│   └── index.css            # Custom CSS & Tailwind utilities
├── index.html               # Meta tags, fonts & title
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json              # SPA routing rewrite for Vercel
└── vite.config.ts
```

---

## ✏️ How to Edit Company Content

All company details (phone, email, Director's message, Hiring Manager name, statistics, services, and social links) are stored in **one single, clean file**:

👉 **`src/data/companyData.ts`**

To update the Hiring Manager's name once announced:
1. Open `src/data/companyData.ts`
2. Locate `leadership.hiringManager.name`
3. Replace `"[Hiring Manager Name]"` with the actual name
4. Set `isPlaceholder: false`
5. Save the file. The change updates across the entire website instantly!

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18+ or v20+) and **npm** installed on your system.

### 2. Installation
Open your terminal in the project root directory and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:5173/`. Open it in any browser to preview and test.

### 4. Create Production Build
```bash
npm run build
```
This compiles a minified, production-ready bundle inside the `dist/` folder.

---

## 🌐 GitHub Setup & Vercel Deployment Guide

### Step 1: Initialize Git and Push to GitHub
1. Open PowerShell or Terminal in `c:\SANGRAM PROJECTS\ONPOINT`
2. Initialize repository and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Onpoint Employment Services portfolio"
   ```
3. Create a new repository on your GitHub account (e.g. `onpoint-portfolio`).
4. Link and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/onpoint-portfolio.git
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (1-Click Hosting)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository `onpoint-portfolio`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. Within 60 seconds, your website will be live on a fast, free Vercel domain (e.g. `https://onpoint-portfolio.vercel.app`).

---

### Step 3: Connect Custom Domain (`www.onpointemployments.com`)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Type your purchased domain: `www.onpointemployments.com` and click **Add**.
3. Vercel will provide standard DNS records:
   - **Type A Record:**
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record:**
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Log into your domain registrar (GoDaddy, Namecheap, Hostinger, Google Domains, etc.) and add these records in the **DNS Management** panel.
5. Vercel will automatically verify the records within minutes and generate a **free automatic SSL certificate (HTTPS)**.

---

## 🔒 Copyright & Ownership
© 2026 **ONPOINT EMPLOYMENT SERVICES**. All Rights Reserved.  
Narhe, Pune, Maharashtra, India.

