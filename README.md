# moli_42ndpioneer — Personal Archive

A responsive portfolio built from the original Persona-inspired MVC project, redesigned with a hybrid Persona 3 / Persona 5 visual direction. It is intended to showcase both a personal introduction and projects.

## Structure

```
├── index.html            Page structure
├── css/style.css         Themes, layout, responsive rules
├── js/model.js           Editable profile settings, projects, skills, GitHub feed
├── js/view.js            Rendering, transitions, lettering, cursor and clock
├── js/controller.js      Input and navigation
└── assets/               Existing visual assets and sound
```

## Personalise before publishing

- Edit the home tagline and About text in `index.html`.
- Edit `githubUser`, featured projects, and skills in `js/model.js`. Leave `githubUser` blank to hide the live repository feed.
- Replace the placeholder email and social links in the Contact section.
- Add your portrait as `assets/me.jpg`; add project thumbnails under `assets/projects/`.
- Update the browser title and visible labels if you change the site name.

The original owner's biography, contact details, CV, and repository data have been removed. Placeholder copy is deliberately used where your personal details are needed.

## Run locally

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Controls

Use the arrow keys and Enter to navigate on desktop; use the on-screen menu and Back controls on touch devices.
