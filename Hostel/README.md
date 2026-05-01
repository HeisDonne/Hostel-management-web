# Hostel Management System

## Files In This Folder

```
hostel-templates/
│
├── base-public.html       ← Use this for: index, login, register
├── base-dashboard.html    ← Use this for: all pages after login
│
├── css/
│   └── style.css          ← Shared styles — DO NOT edit without telling the ADMIN
│
├── js/
│   └── main.js            ← Shared JS — DO NOT edit without telling the ADMIN
└── images/                ← Put all images here
```

## How To Start Your Page

### If your page is BEFORE login (Home, Login, Register):

1. Copy `base-public.html`
2. Rename it to your page e.g. `register.html`
3. Change the `<title>` tag
4. Delete the example content inside `<main>`
5. Build your content inside `<main>`
6. Keep the navbar and footer exactly as they are

### If your page is AFTER login (Dashboard, Rooms, Booking, etc.):

1. Copy `base-dashboard.html`
2. Rename it to your page e.g. `rooms.html`
3. Change the `<title>` tag
4. In the sidebar, add `active` class to the link matching your page
5. Delete the example content inside `<main>`
6. Build your content inside `<main>`
7. Keep the topbar and sidebar exactly as they are

## Who Builds What

| Member              | Template to use     | Pages                                                |
| ------------------- | ------------------- | ---------------------------------------------------- |
| [HeisDonne]         | base-public.html    | `index.html`, `login.html`, `student-dashboard.html` |
| [omow665]           | base-dashboard.html | `register.html`, `profile.html`                      |
| [peterkuku2009-bip] | base-dashboard.html | `rooms.html`, `book-room.html`                       |
| [unknown]           | base-dashboard.html | `booking-status.html`, `payment.html`                |
| [unknown]           | base-dashboard.html | `complaints.html`                                    |

---

## Useful CSS Classes

### Buttons

```html
<button class="dash-btn-primary">Click Me</button>
<button class="dash-btn-outline">Click Me</button>
<button class="btn-block">Full Width Button</button>
```

### Status Badges

```html
<span class="badge-pending">Pending</span>
<span class="badge-approved">Approved</span>
<span class="badge-rejected">Rejected</span>
<span class="badge-paid">Paid</span>
<span class="badge-unpaid">Not Paid</span>
<span class="badge-available">Available</span>
<span class="badge-occupied">Occupied</span>
<span class="badge-progress">In Progress</span>
<span class="badge-resolved">Resolved</span>
<span class="badge-closed">Closed</span>
```

### Cards

```html
<div class="dash-card">
  <div class="dash-card-header">Card Title</div>
  <div class="dash-card-body">Content here</div>
</div>
```

### Table

```html
<table class="dash-table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

### Form Inputs

```html
<div class="mb-3">
  <label class="form-label">Label</label>
  <input type="text" class="form-control" placeholder="Enter value" />
</div>
```

---

## Before You Submit Your Page

- [ ] Page opens in browser without errors
- [ ] Title tag is updated
- [ ] Sidebar active link is correct (dashboard pages)
- [ ] Navbar and footer/sidebar are unchanged
- [ ] All amounts show ₦ not $
- [ ] Page looks good on mobile (resize browser to check)
- [ ] Images are in the `/images/` folder

---

### IF YOU ARE CONFUSED, LET ME KNOW SO I CLEAR THE CONFUSION.
