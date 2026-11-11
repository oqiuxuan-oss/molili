/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "", // Add your GitHub username to enable automatic repository loading.

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "", // Add an email address only if you re-enable the contact form.

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
  },

  // ---- Featured projects (hand-written, shown above the GitHub feed) ----
  featured: [
    {
      title: "FIRST PROJECT",
      tag: "Featured", color: "#e6002e",
      url: "#", cta: "Add project link →",
      img: "assets/projects/project-01.png",
      desc: "Replace this with a short description of a project, experiment, or work sample.",
    },
    {
      title: "SECOND PROJECT",
      tag: "Creative", color: "#35b9e9",
      url: "#", cta: "Add project link →",
      img: "assets/projects/project-02.png",
      desc: "Show the process, the idea behind it, or what you learned while making it.",
    },
    {
      title: "THIRD PROJECT",
      tag: "Archive", color: "#f4c84a",
      url: "#", cta: "Add project link →",
      img: "assets/projects/project-03.png",
      desc: "Projects can be digital, visual, written, experimental, or anything you want to share.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: ["FIRST PROJECT", "SECOND PROJECT", "THIRD PROJECT"],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [],

  // Optional thumbnail overrides: repo name → image path.
  // Anything not listed is looked up at assets/projects/<RepoName>.png
  projectImages: {
    // "DownloadGuard": "assets/projects/downloadguard.png",
  },

  langColors: {
    JavaScript: "#5c5af1", TypeScript: "#3178c6", Python: "#3572A5",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", MATLAB: "#e16737", Java: "#b07219", C: "#555", "C++": "#f34b7d",
  },

  // ---- Skills screen ----
  skills: [
    { group: "Creative practice", items: [["Research & curiosity", 75], ["Ideas & experimentation", 70], ["Visual thinking", 65]] },
    { group: "Tools & technology", items: [["Add a tool or skill", 60], ["Add another skill", 50]] },
    { group: "Currently exploring", items: [["New interests", 55], ["Things to learn", 45]] },
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    if (!this.githubUser.trim()) return { repos: [], live: false };
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};
