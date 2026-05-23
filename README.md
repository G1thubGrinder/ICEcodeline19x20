# ICE Codeline 19×20

A web app that reveals matched **codelines** (buddy pairings) between Information and Communication Engineering students from batches 19 and 20. Each student signs in with their Student ID and birthdate, and the app shows the codeline(s) they were matched with, along with profile details like nickname, hobbies, favorites, and contact handles.

## Features

- Student login using Student ID + birthdate (format: `ddmmyyyy`) as the password
- Reveal screen showing one or more matched codelines per student
- Profile card per codeline: name, nationality, favorite food / snack / drink, hobby, specific preference, LINE ID, Instagram
- Light/dark theme via Tailwind utilities
- Static data source (`public/students.json`) — no backend required

## Tech stack

- **React 19** with hooks
- **Vite 7** for dev server and bundling
- **Tailwind CSS 4** (via `@tailwindcss/vite`) for styling
- **ESLint 9** for linting
- **Vercel** for deployment

## Getting started

Requires Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check / lint
npm run lint

# build for production
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
.
├── public/
│   ├── students.json      # student + codeline data (served as a static asset)
│   └── vite.svg
├── src/
│   ├── App.jsx            # top-level state machine: Login → Loading → Reveal
│   ├── main.jsx           # React entrypoint
│   ├── index.css          # Tailwind + custom font (Libertinus Math)
│   ├── App.css
│   ├── assets/fonts/      # Libertinus Math font
│   └── components/
│       ├── Login.jsx      # Student ID + birthdate form, validates against students.json
│       ├── Loading.jsx    # spinner shown between login and reveal
│       └── Reveal.jsx     # matched codeline(s) display
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Data format

`public/students.json` is an array of student records. Each student has one or more `codelines`:

```json
[
  {
    "studentID": "6712345678",
    "birthdate": "01012001",
    "nickname": "Git",
    "codelines": [
      {
        "name": "Hub",
        "nationality": "Thai",
        "favoriteFood": "Pizza",
        "favoriteSnack": "Lays",
        "favoriteDrink": "Matcha Latte",
        "hobby": "Playing Game",
        "specificPref": "",
        "lineID": "hubhubhub",
        "instagram": "hhhuuubbb"
      }
    ]
  }
]
```

| Field          | Notes                                                       |
| -------------- | ----------------------------------------------------------- |
| `studentID`    | Used as the login username                                  |
| `birthdate`    | Used as the password, formatted `ddmmyyyy`                  |
| `nickname`     | Greeted by name on the reveal screen                        |
| `codelines[]`  | One or more matched partners; the UI handles both cases     |

Empty profile fields render as `Not provided` (or `None` for `specificPref`).

## Notes

- Authentication is intentionally lightweight: the JSON file is publicly served, so anyone with a valid Student ID + birthdate pair can view that student's matches. Do not put truly sensitive data in `students.json`.
- The 500 ms delay between submit and reveal is cosmetic (handled in `App.jsx`) to make the loading state visible.
