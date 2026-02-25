# Subscription Box – Page List & Testing Guide

## Clean list of pages (30 total)

### Public – Marketing & Info
| Page | File | Description |
|------|------|-------------|
| Home (Style 1) | `index.html` | Main landing page |
| Home (Style 2) | `home-2.html` | Alternate home layout |
| About | `about.html` | Our story / company info |
| Services | `services.html` | Service offerings |
| Service Details | `service-details.html` | Single service page |
| Pricing / Plans | `pricing.html` | Plans and pricing |
| Contact | `contact.html` | Contact / support |
| Blog | `blog.html` | Blog listing |
| Blog Article | `blog-details.html` | Single blog post |
| Gift a Box | `gift.html` | Gift subscription page |

### Auth & Account
| Page | File | Description |
|------|------|-------------|
| Sign In / Sign Up | `auth.html` | Login and registration |
| Forgot Password | `forgot-password.html` | Password reset |

### Checkout & Orders
| Page | File | Description |
|------|------|-------------|
| Checkout | `checkout.html` | Secure checkout |
| Order Confirmation | `order-confirmation.html` | Post-purchase confirmation |

### Subscriber dashboard (after login)
| Page | File | Description |
|------|------|-------------|
| My Dashboard | `subscriber-dashboard.html` | Main dashboard |
| My Boxes | `dashboard-my-boxes.html` | Shipments & box history |
| Billing & Plans | `dashboard-billing.html` | Billing and plan management |
| Referrals | `dashboard-referrals.html` | Referral program |
| Account Settings | `dashboard-settings.html` | Profile and preferences |

### Admin (after login as admin)
| Page | File | Description |
|------|------|-------------|
| Admin Dashboard | `admin-dashboard.html` | Analytics / overview |
| Users / Subscribers | `admin-users.html` | User management |
| Orders / Shipments | `admin-orders.html` | Order management |
| Inventory | `admin-inventory.html` | Stock / inventory |
| Messages | `admin-messages.html` | Support messages |

### Legal & Utility
| Page | File | Description |
|------|------|-------------|
| Terms of Service | `terms.html` | Terms of use |
| Privacy Policy | `privacy.html` | Privacy policy |
| Site Map | `site-map.html` | All pages index |
| 404 | `404.html` | Not found page |
| Coming Soon | `coming-soon.html` | Launch placeholder |
| Full App Demo | `stackly-full-app.html` | Multi-page demo |

---

## How to test

### 1. Open the project
- Open the project folder in your editor or file manager.
- **Option A:** Double‑click `index.html` to open in the browser.  
- **Option B:** Use a local server (recommended so paths work correctly):
  - From the project folder run:  
    `npx serve .`  
    or  
    `python -m http.server 8000`
  - Then go to `http://localhost:8000` (or the port shown).

### 2. Test as guest (not logged in)
- Go to **Home** (`index.html`).
- Use the header: **Home**, **About**, **Services**, **Pricing**, **Blog**, **Contact**.
- You should **not** see **Dashboard** or **Admin** in the header.
- Click **Log In** or **Get Started** → you should land on `auth.html`.

### 3. Test login → dashboard redirect
1. Open **Sign In** (`auth.html`).
2. Enter any email and password (no real validation).
3. Leave **“Login as Admin”** unchecked.
4. Click **Sign In**.
5. You should be redirected to **My Dashboard** (`subscriber-dashboard.html`).

### 4. Test header when logged in (subscriber)
- After step 3, check the header:
  - **Dashboard** dropdown: My Dashboard, My Boxes, Billing, Settings.
  - **Log Out** instead of Log In / Get Started.
- Use the **Dashboard** dropdown to open:
  - My Dashboard, My Boxes, Billing, Settings.
- Use the sidebar on any dashboard page: same links plus **Referrals** and **Back to Home**.
- Click **Log Out** (header or sidebar) → you should go back to the home page and the header should show **Log In** / **Get Started** again.

### 5. Test login as admin
1. Open **Sign In** (`auth.html`).
2. Check **“Login as Admin (for testing)”**.
3. Click **Sign In**.
4. You should still land on **My Dashboard**.
5. In the header you should see:
   - **Dashboard** dropdown (as above).
   - **Admin** dropdown: Analytics, Users, Orders, Inventory, Messages.
6. Use the **Admin** dropdown to open each admin page.
7. On admin pages, use the sidebar to move between Analytics, Subscribers, Shipments, Messages, Inventory, etc.
8. Click **Log Out** → back to home; **Admin** and **Dashboard** disappear from the header.

### 6. Test responsive / mobile
- Resize the browser or use DevTools device toolbar (e.g. 360px, 768px).
- Open the **hamburger menu** on small screens.
- Check:
  - All main links (Home, About, Services, Pricing, Blog, Contact) are there.
  - When logged in, **Dashboard** and (if admin) **Admin** sections appear in the menu.
  - **Logout** is available in the mobile menu when logged in.

### 7. Quick link checklist (manual smoke test)
Open each of these once to confirm the page loads:

- `index.html` – Home  
- `about.html` – About  
- `pricing.html` – Pricing  
- `auth.html` – Login  
- After login: `subscriber-dashboard.html`, `dashboard-my-boxes.html`, `dashboard-billing.html`  
- After admin login: `admin-dashboard.html`, `admin-orders.html`  
- `contact.html` – Contact  
- `terms.html` – Terms  
- `404.html` – 404  

### 8. Auth state (localStorage)
- Login sets: `localStorage.isLoggedIn = 'true'`, and if admin: `localStorage.isAdmin = 'true'`.
- Logout removes both.
- To “reset” without using Log Out: open DevTools → Application → Local Storage → delete `isLoggedIn` and `isAdmin` for this origin, then refresh.

---

## File list (alphabetical)

```
404.html
about.html
admin-dashboard.html
admin-inventory.html
admin-messages.html
admin-orders.html
admin-users.html
auth.html
blog.html
blog-details.html
checkout.html
coming-soon.html
contact.html
dashboard-billing.html
dashboard-my-boxes.html
dashboard-referrals.html
dashboard-settings.html
forgot-password.html
gift.html
home-2.html
index.html
order-confirmation.html
pricing.html
privacy.html
service-details.html
services.html
site-map.html
stackly-full-app.html
subscriber-dashboard.html
terms.html
```

Total: **30 pages**.
