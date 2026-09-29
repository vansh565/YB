// =====================
// CONFIG (edit easily)
// =====================
const PROFILE = {
  name: "Yogendra Bharadwaj",
  email: "bharadwaj.yogendra1@gmail.com",
  phone: "+91-9784831595",
  location: "India",

  // Put real links here
  resumeUrl: "ADD_YOUR_RESUME_PDF_LINK_HERE",
  linkedin: "https://www.linkedin.com/in/bh-yogendra/",
  github: "https://github.com/bh-yogendra1",
  scholar: "ADD_GOOGLE_SCHOLAR_LINK_HERE",

  // Images (local path or hosted URL)
  profileImg: "assets/profile.jpg",
  heroBannerImg: "assets/hero-banner.jpg", // BIG image above "Yogendra Bharadwaj / Profile Summary" area

  // Optional: Nav/Footer logo (set empty string to hide image and show "YB" fallback)
  navLogo: "assets/logo.png",       // NAV LOGO image path (customize anytime)
  footerLogo: "assets/logo.png",    // FOOTER LOGO image path
  heroBannerImg2: "assets/hero-banner-2.jpg", // Right-side hero highlight image

  // Contact extras
  mapEmbedUrl: "ADD_GOOGLE_MAP_EMBED_URL_HERE",  // CONTACT MAP: paste iframe src URL (NOT the whole iframe)
  contactQrImg: "assets/qr/contact-qr.png",      // CONTACT SECTION QR image
  footerQrImg: "assets/qr/footer-qr.png",        // FOOTER QR image
};

// Hero text
const HERO = {
  bullets: [
    "AI + Web applications: build, enhance, optimize.",
    "Research work: papers, patents, book projects.",
    "Robotics + automation development exposure."
  ],
  badges: ["AI","ML / DL","MERN","Robotics","Research"],
  float1: "15K+ LinkedIn followers",
  float2: "M.Tech (AI) @ IIT Patna",
};

// About
const ABOUT = {
  text: "I’m Yogendra Bharadwaj — an Artificial Intelligence Software Developer who builds robust, user-centered systems: AI applications, dashboards, conversational assistants, and robotics automation.",
  focus: "AI • Full-Stack • Research",
  tools: "Git/GitHub • Docker • Linux",
};

// 5 demo counters (0 -> big number)
const STATS = [
  { label: "Followers", value: 15000, suffix: "+" },
  { label: "Projects", value: 1000, suffix: "+" },
  { label: "Certificates", value: 1200, suffix: "+" },
  { label: "Research Reads", value: 1000, suffix: "K+" }, // demo
  { label: "Impact Score", value: 1000, suffix: "+" }
];

// Skills (devicon)
const SKILLS = {
  languages: [
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-cplusplus-plain colored", name: "C/C++" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-mysql-plain colored", name: "SQL" },
  ],
  stack: [
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original colored", name: "Express" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
  ]
  ,
  // NEW (extra 3 cards) — add minimum 12 items each for better visibility
  ai: [
    { icon: "devicon-tensorflow-original colored", name: "TensorFlow" },
    { icon: "devicon-pytorch-original colored", name: "PyTorch" },
    { icon: "devicon-opencv-plain colored", name: "OpenCV" },
    { icon: "devicon-numpy-plain colored", name: "NumPy" },
    { icon: "devicon-pandas-original colored", name: "Pandas" },
    { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" },
    { icon: "devicon-jupyter-plain colored", name: "Jupyter" },
    { icon: "devicon-anaconda-original colored", name: "Anaconda" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP (AI)" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS (AI)" },
    { icon: "devicon-azure-plain colored", name: "Azure (AI)" },
    { icon: "devicon-kaggle-original colored", name: "Kaggle" }
  ],
  cloud: [
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
    { icon: "devicon-jenkins-line colored", name: "Jenkins" },
    { icon: "devicon-gitlab-plain colored", name: "GitLab CI" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP" },
    { icon: "devicon-azure-plain colored", name: "Azure" },
    { icon: "devicon-nginx-original colored", name: "NGINX" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
    { icon: "devicon-bash-plain colored", name: "Bash" },
    { icon: "devicon-grafana-original colored", name: "Grafana" },
    { icon: "devicon-prometheus-original colored", name: "Prometheus" }
  ],
  research: [
    { icon: "devicon-python-plain colored", name: "Python (Tools)" },
    { icon: "devicon-latex-original colored", name: "LaTeX" },
    { icon: "devicon-markdown-original colored", name: "Markdown" },
    { icon: "devicon-git-plain colored", name: "Versioning" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-notion-plain colored", name: "Notion" },
    { icon: "devicon-slack-plain colored", name: "Slack" },
    { icon: "devicon-google-plain colored", name: "Google Scholar" },
    { icon: "devicon-figma-plain colored", name: "Figma" },
    { icon: "devicon-vscode-original colored", name: "VS Code" },
    { icon: "devicon-ubuntu-plain colored", name: "Ubuntu" },
    { icon: "devicon-matlab-plain colored", name: "MATLAB" }
  ]

};

// Experience cards (bigger + 2 images + pdf)
const EXPERIENCES = [
  {
    key: "geu",
    role: "Summer Intern",
    org: "Graphic Era Deemed University (GEU), Dehradun",
    date: "03/07/2023 – 16/08/2023",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    points: [
      "Built humanoid robot features: locomotion + “namaste” greeting within ~50cm range.",
      "Implemented voice-based conversational abilities using AI.",
      "Developed a web page to control robot speed/direction for manual operation."
    ],
    tags: ["Python","ML","GenAI","C","HTML/CSS/JS"],
    media: [
      { name: "Completion Certificate", type: "image", thumb: "assets/exp/geu-1.jpg", url: "assets/exp/geu-1.jpg" },
      { name: "Recommendation Letter", type: "image", thumb: "assets/exp/geu-2.jpg", url: "assets/exp/geu-2.jpg" },
      // You can add pdf too:
      // { name:"Certificate PDF", type:"pdf", url:"assets/exp/geu-cert.pdf" }
    ],
    links: [
      { label:"Organization Website", url:"https://www.geu.ac.in/" },
      { label:"Internship Proof", url:"ADD_GEU_PROOF_LINK" }
    ]
  },
  {
    key: "visit",
    role: "SDE Intern",
    org: "VISIT-UTTRAKHAND (visituttrakhand.in), Dehradun",
    date: "01/04/2023 – 30/06/2023",
    logo: "https://uttarakhandtourism.gov.in/sites/default/files/2022-10/uttarakhand-tourism-logo.png",
    points: [
      "Full-stack development (frontend + backend) for a travel website.",
      "Built executive dashboards for travel package plans and overviews."
    ],
    tags: ["MERN","Dashboards","UX"],
    media: [
      { name: "Offer/Proof", type: "image", thumb: "assets/exp/visit-1.jpg", url: "assets/exp/visit-1.jpg" },
      { name: "Certificate", type: "image", thumb: "assets/exp/visit-2.jpg", url: "assets/exp/visit-2.jpg" },
    ],
    links: [
      { label:"Visit Uttarakhand", url:"https://www.visituttrakhand.in/" },
      { label:"Internship Proof", url:"ADD_VISIT_PROOF_LINK" }
    ]
  }
];

// Education cards (logo + media)
const EDUCATION = [
  {
    key: "iitp",
    degree: "M.Tech in Computer Science (Artificial Intelligence)",
    inst: "IIT Patna",
    date: "2025 – Present",
    logo: "https://www.pngkit.com/png/detail/89-895805_iit-patna-logo-png.png",
    media: [
      { name: "ID Card / Proof", type: "image", thumb: "assets/edu/iitp-1.jpg", url: "assets/edu/iitp-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/iitp-2.jpg", url: "assets/edu/iitp-2.jpg" },
    ]
  },
  {
    key: "geu",
    degree: "B.Tech in Computer Science",
    inst: "Graphic Era Deemed University (GEU), Dehradun",
    date: "2020 – 2024 • CGPA: 8.11",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    media: [
      { name: "Degree/Marksheet", type: "image", thumb: "assets/edu/geu-1.jpg", url: "assets/edu/geu-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/geu-2.jpg", url: "assets/edu/geu-2.jpg" },
    ]
  }
];

// Projects (6+) + 2 images + 2 links
const PROJECTS = [
  {
    title: "Voice-Enabled AI Disease Prediction",
    meta: "Python • ML • NLP",
    desc: "Voice-based disease prediction with intelligent outputs and user-friendly workflow. Scalable architecture for deployment and future enhancements.",
    img1: "assets/projects/p1-1.jpg",
    img2: "assets/projects/p1-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Robotics Control Dashboard",
    meta: "HTML • CSS • JS",
    desc: "A web dashboard to control robot speed/direction with low-latency control and a clean UI for manual operation.",
    img1: "assets/projects/p2-1.jpg",
    img2: "assets/projects/p2-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Travel Executive Dashboard",
    meta: "MERN • Analytics",
    desc: "Full-stack dashboard for travel packages: planning views, management tools, and admin analytics for better operations.",
    img1: "assets/projects/p3-1.jpg",
    img2: "assets/projects/p3-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "AI Chat Assistant (Demo)",
    meta: "LLM • UI • API",
    desc: "A demo assistant interface for question answering, structured outputs, and knowledge-base style responses (backend extendable).",
    img1: "assets/projects/p4-1.jpg",
    img2: "assets/projects/p4-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Smart Safety Detection System",
    meta: "IoT • Sensors • AI",
    desc: "Home/industry safety system prototype with detection, alert logic, and monitoring dashboard concept.",
    img1: "assets/projects/p5-1.jpg",
    img2: "assets/projects/p5-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Portfolio 3D Website",
    meta: "Modern UI • 3D Glass",
    desc: "Premium 3D-glass portfolio with sections, animations, sliders, search, blogs, LinkedIn cards, and light/dark mode.",
    img1: "assets/projects/p6-1.jpg",
    img2: "assets/projects/p6-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  }
];


// =====================
// NEW: Fixed 9 projects grid (3 categories × 3 cards)
// NOTE: This is separate from the existing PROJECTS slider below.
// Edit titles, stacks, links, and images here.
// =====================
const PROJECT_GRID_9 = {
  cat1Title: "Project Category 1",
  cat2Title: "Project Category 2",
  cat3Title: "Project Category 3",
  cat1: [
    { title:"Project 1", subtitle:"Short subtitle", stack:["AI","Python","NLP"], img:"assets/projects/g1.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 2", subtitle:"Short subtitle", stack:["MERN","UI"], img:"assets/projects/g2.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 3", subtitle:"Short subtitle", stack:["IoT","Sensors"], img:"assets/projects/g3.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
  cat2: [
    { title:"Project 4", subtitle:"Short subtitle", stack:["LLM","RAG"], img:"assets/projects/g4.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Demo", url:"ADD_LINK"} },
    { title:"Project 5", subtitle:"Short subtitle", stack:["Robotics","CV"], img:"assets/projects/g5.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Video", url:"ADD_LINK"} },
    { title:"Project 6", subtitle:"Short subtitle", stack:["Dashboard","Charts"], img:"assets/projects/g6.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
  cat3: [
    { title:"Project 7", subtitle:"Short subtitle", stack:["Research","Paper"], img:"assets/projects/g7.jpg", link1:{label:"Paper", url:"ADD_LINK"}, link2:{label:"Code", url:"ADD_LINK"} },
    { title:"Project 8", subtitle:"Short subtitle", stack:["Automation","Python"], img:"assets/projects/g8.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 9", subtitle:"Short subtitle", stack:["Web","3D UI"], img:"assets/projects/g9.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
};

// =====================
// NEW: Certificates (6 cards) + slider rail
// =====================
const CERTIFICATES = [
  { title:"Certificate 1", subtitle:"Issuer • Year", img:"assets/cert/c1.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 2", subtitle:"Issuer • Year", img:"assets/cert/c2.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 3", subtitle:"Issuer • Year", img:"assets/cert/c3.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 4", subtitle:"Issuer • Year", img:"assets/cert/c4.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 5", subtitle:"Issuer • Year", img:"assets/cert/c5.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 6", subtitle:"Issuer • Year", img:"assets/cert/c6.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
];

// Slider items (optional separate highlights)
const CERT_SLIDES = [
  { title:"Highlighted Certificate", subtitle:"Short story / result", img:"assets/cert/s1.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
  { title:"Another Highlight", subtitle:"Issuer • Year", img:"assets/cert/s2.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
];

// =====================
// NEW: Recommendations (images + LinkedIn)
// =====================
const RECOMMENDATIONS = [
  { title:"Recommendation 1", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r1.jpg", source:"LinkedIn" },
  { title:"Recommendation 2", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r2.jpg", source:"Image proof" },
  { title:"Recommendation 3", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r3.jpg", source:"LinkedIn" },
];


// NEW: Media slider (Projects ke baad)
const MEDIA_SLIDES = [
  {
    img: "assets/media/m1.jpg",
    title: "Conference / Talk",
    subtitle: "Speaker / Guest Session",
    desc: "Write 5–7 lines about this media moment. Explain context, your role, impact, audience, and key outcome. Add more details to make it strong and impressive."
  },
  {
    img: "assets/media/m2.jpg",
    title: "Hackathon Moment",
    subtitle: "Team + Solution Demo",
    desc: "Write 5–7 lines about your hackathon achievement, the problem statement, what you built, and why it mattered. Keep it story-like and professional."
  },
  {
    img: "assets/media/m3.jpg",
    title: "Lab / Robotics",
    subtitle: "Automation & Experiments",
    desc: "Write 5–7 lines describing the robotics/AI lab work, experiments, results, and learnings. Add measurable results if possible."
  }
];

// NEW: Video glimpse
const VIDEO = {
  src: "assets/video/glimpse.mp4" // put your mp4 file here
};

// Publications / Patents / Books: (2 buttons + optional 2 images)
const PUBLICATIONS = [
  {
    title: "Gas & Fire Detection Systems for Home/Industry",
    subtitle: "CRC Press • 2023",
    meta: "Publication",
    desc: "This work focuses on design and implementation of detection mechanisms for safety monitoring, including alerts, architecture, and deployment notes.",
    img1: "assets/pubs/pub1-1.jpg",
    img2: "assets/pubs/pub1-2.jpg",
    btn1: { label: "View Paper", url: "ADD_PUBLICATION_LINK" },
    btn2: { label: "Publisher", url: "ADD_PUBLISHER_LINK" }
  }
];

const PATENTS = [
  {
    title: "202531085495 — Solar-electric marine vessel with dual turbine propulsion",
    subtitle: "Filed/Published • 2025",
    meta: "Patent",
    desc: "Patent describing a marine vessel with energy efficiency and safety focus. Includes propulsion details and environmental safety aspects.",
    img1: "assets/patents/p1-1.jpg",
    img2: "assets/patents/p1-2.jpg",
    btn1: { label: "View Patent", url: "ADD_PATENT_LINK" },
    btn2: { label: "Patent Portal", url: "ADD_PATENT_PORTAL_LINK" }
  }
];

const BOOK_CHAPTERS = [
  {
    title: "Fuzzy & Hybrid Techniques for Brain Signal Understanding",
    subtitle: "Book Chapter",
    meta: "Book Chapter",
    desc: "Discusses fuzzy/hybrid approaches for analyzing brain signals, improving interpretability, and optimizing classification pipelines.",
    img1: "assets/books/c1-1.jpg",
    img2: "assets/books/c1-2.jpg",
    btn1: { label: "View Chapter", url: "ADD_CHAPTER_LINK" },
    btn2: { label: "Publisher", url: "ADD_CHAPTER_PUBLISHER_LINK" }
  }
];

const EDITED_BOOKS = [
  {
    title: "AI for Drones in Smart Healthcare",
    subtitle: "Edited Book (Proposal)",
    meta: "Edited Book",
    desc: "Edited book proposal with scope on drone-based healthcare monitoring, intelligent sensing, and future research directions.",
    img1: "assets/books/e1-1.jpg",
    img2: "assets/books/e1-2.jpg",
    btn1: { label: "View Details", url: "ADD_BOOK_LINK" },
    btn2: { label: "Publisher", url: "ADD_BOOK_PUBLISHER_LINK" }
  }
];

// Achievements (9) — bigger card + 2 images + 2 links
const ACHIEVEMENTS = [
  { icon:"🏆", title:"Best Researcher Award", meta:"G20 Symposium • 2023", sub:"Robotics & Automation (Digital Agriculture)", desc:"Write 5–7 lines about this recognition: why you got it, what you delivered, impact, and audience. Keep it strong, measurable, and professional.", img1:"assets/ach/a1-1.jpg", img2:"assets/ach/a1-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Gallery", url:"ADD_LINK"} },
  { icon:"🎖️", title:"Top Performer Recognition", meta:"Academic / Research", sub:"Consistent results & contributions", desc:"Write 5–7 lines describing your performance recognition and what outcomes you achieved.", img1:"assets/ach/a2-1.jpg", img2:"assets/ach/a2-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Certificate", url:"ADD_LINK"} },
  { icon:"🥇", title:"Hackathon Winner", meta:"Tech Event", sub:"Solution impact & execution", desc:"Write 5–7 lines about hackathon: problem, your approach, role, and final result.", img1:"assets/ach/a3-1.jpg", img2:"assets/ach/a3-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📜", title:"Publication Milestone", meta:"Research Output", sub:"Peer-reviewed contribution", desc:"Write 5–7 lines: what you published, novelty, and why it matters.", img1:"assets/ach/a4-1.jpg", img2:"assets/ach/a4-2.jpg", btn1:{label:"View", url:"ADD_LINK"}, btn2:{label:"Index", url:"ADD_LINK"} },
  { icon:"🔬", title:"Research Collaboration", meta:"Interdisciplinary", sub:"Evaluation & reporting", desc:"Write 5–7 lines about collaboration and what you delivered.", img1:"assets/ach/a5-1.jpg", img2:"assets/ach/a5-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Docs", url:"ADD_LINK"} },
  { icon:"🤖", title:"Robotics Achievement", meta:"Automation", sub:"AI-based interaction workflow", desc:"Write 5–7 lines about robotics build, demos, and outcomes.", img1:"assets/ach/a6-1.jpg", img2:"assets/ach/a6-2.jpg", btn1:{label:"Video", url:"ADD_LINK"}, btn2:{label:"Proof", url:"ADD_LINK"} },
  { icon:"🌟", title:"Community Recognition", meta:"Mentoring / Outreach", sub:"Helping & guidance", desc:"Write 5–7 lines on mentoring/outreach impact.", img1:"assets/ach/a7-1.jpg", img2:"assets/ach/a7-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📈", title:"Growth Milestone", meta:"Professional", sub:"Skill + deliverables", desc:"Write 5–7 lines describing growth and results.", img1:"assets/ach/a8-1.jpg", img2:"assets/ach/a8-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Notes", url:"ADD_LINK"} },
  { icon:"🎓", title:"Certification Highlights", meta:"Upskilling", sub:"AI/Full-stack certifications", desc:"Write 5–7 lines about certification journey & outcomes.", img1:"assets/ach/a9-1.jpg", img2:"assets/ach/a9-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"All Certs", url:"ADD_LINK"} }
];

// BLOGS (local + optional external RSS)
const BLOG_POSTS = [
  {
    title: "My AI Journey at IIT Patna",
    subtitle: "Learning + research + product building",
    desc: "Write 5–7 lines for the blog preview. Add a nice summary for readers to click and read the full post.",
    img1: "assets/blog/b1-1.jpg",
    img2: "assets/blog/b1-2.jpg",
    btn1: { label: "Read Blog", url: "ADD_BLOG_LINK" },
    btn2: { label: "Related", url: "ADD_RELATED_LINK" }
  }
];

// OPTIONAL: external RSS feeds (CORS depends). Use a proxy like rss2json.
// Example: https://api.rss2json.com/v1/api.json?rss_url=YOUR_RSS
const BLOG_FEEDS = [
  // { label: "My Medium", rss2json: "https://api.rss2json.com/v1/api.json?rss_url=YOUR_MEDIUM_RSS" }
];

// LinkedIn Posts (manual reliable)
const LINKEDIN_POSTS = [
  {
    title: "Latest LinkedIn Post",
    subtitle: "4–5 recent posts (manual links/snippets)",
    meta: "LinkedIn",
    desc: "Put 2–3 lines summary here for preview. Button opens LinkedIn post.",
    img1: "assets/li/li1-1.jpg",
    img2: "assets/li/li1-2.jpg",
    btn1: { label: "Open Post", url: "ADD_LINKEDIN_POST_URL" },
    btn2: { label: "My Profile", url: PROFILE.linkedin },
    // Optional: embed html snippet (if you want)
    embedHtml: "" // e.g. '<iframe ...></iframe>' OR LinkedIn embed snippet
  }
];

// =====================
// Utilities
// =====================
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function safeUrl(url){
  if (!url || String(url).startsWith("ADD_")) return "#";
  try { return new URL(url, window.location.href).href; }
  catch { return "#"; }
}
function safeText(s, fallback=""){
  const t = String(s ?? "").trim();
  return t || fallback;
}
function isPdf(url){
  return String(url || "").toLowerCase().endsWith(".pdf");
}

// =====================
// Navbar mobile toggle
// =====================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// =====================
// Scroll progress
// =====================
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = `${scrolled}%`;
});

// =====================
// Theme toggle
// =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function setTheme(mode){
  if (mode === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
  localStorage.setItem("theme", mode);
  if (themeIcon) themeIcon.innerHTML = mode === "light" ? `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` : `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.6A8.5 8.5 0 0 1 11.4 3a6.8 6.8 0 1 0 9.6 9.6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
}
setTheme(localStorage.getItem("theme") || "dark");
themeToggle?.addEventListener("click", () => {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});
// =====================
// LANGUAGE (dropdown + simple i18n)
// NOTE: Pure dictionary-based (no API). Full control over wording.
// =====================
const LANGUAGES = [
  { key: "en", code: "EN", name: "English",   flag: "🇺🇸" },
  { key: "hi", code: "HI", name: "हिन्दी",     flag: "🇮🇳" },
  { key: "fr", code: "FR", name: "Français",  flag: "🇫🇷" },
  { key: "de", code: "DE", name: "Deutsch",   flag: "🇩🇪" },
  { key: "es", code: "ES", name: "Español",   flag: "🇪🇸" },
  { key: "ja", code: "JA", name: "日本語",    flag: "🇯🇵" },
  { key: "zh", code: "ZH", name: "中文",      flag: "🇨🇳" },
];

// Complete TEXT dictionary – सभी HTML के visible texts को कवर किया गया है
const TEXT = {
  en: {
    // Navigation (already good)
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_cert: "Certificates",
    nav_reco: "Recommendations",
    nav_media: "Media",
    nav_glimpse: "Video Glimpse",
    nav_blogs: "Blogs",
    nav_linkedin: "LinkedIn",
    nav_publications: "Publications",
    nav_patents: "Patents",
    nav_bookchapter: "Book Chapter",
    nav_editedbook: "Edited Book",
    nav_achievements: "Recognition",
    nav_contact: "Contact",

    // Hero
    hero_kicker: "AI • Full-Stack • Research",
    hero_title_1: "Building intelligent products + research work",
    hero_title_3: "3D-modern",
    hero_title_4: "experience.",
    hero_subtitle: "Results-oriented AI Software Developer with hands-on experience in intelligent & web-based applications. AI Specialist with strong research output (papers, patents, book work).",
    hero_profile_summary: "Profile Summary",
    hero_highlight: "Highlight",
    hero_now: "Now",

    btn_view_projects: "View Projects",
    btn_contact_me: "Contact Me",
    btn_resume: "Download Resume",
    hero_featured: "Featured Highlight",
hero_featured_sub: "Add a big hero poster image here (code link)",


    // Section headings & sub-texts (already data-i18n)
    sec_about: "About",
    sec_about_sub: "What I do and what I’m focused on.",
    sec_skills: "Technical Expertise",
    sec_skills_sub: "Stack logos included.",
    sec_experience: "Work Experience",
    sec_experience_sub: "Each card supports 2 images + certificate PDF + 2 link buttons (from code).",
    sec_education: "Education",
    sec_education_sub: "Logos + media slots from code.",
    sec_projects: "Projects",
    sec_projects_sub: "6+ cards + auto-swap slider. Each project has 2 images + 2 links.",
    sec_certificates: "Certificates",
    sec_certificates_sub: "6 featured certificates + slider (design is different from projects).",
    sec_recommendations: "Recommendations",
    sec_recommendations_sub: "External recommendation images + LinkedIn recommendations (add/edit in script.js).",
    sec_media: "Media",
    sec_media_sub: "Auto slider • hover zoom • title/subtitle + 5–7 lines (from code).",
    sec_glimpse: "Video Glimpse",
    sec_glimpse_sub: "No text inside — video autoplay, muted, loop. Size CSS se adjust kar lena.",
    sec_blogs: "Blogs",
    sec_blogs_sub: "Local blogs + optional external RSS fetch (from code).",
    sec_linkedin: "LinkedIn Posts",
    sec_linkedin_sub: "Last 4–5 posts cards (manual links or embed snippet).",
    sec_publications: "Publications",
    sec_publications_sub: "Each item: title/subtitle/meta + 5 lines + 2 buttons + 2 images (optional).",
    sec_patents: "Patents",
    sec_patents_sub: "Each item: 2 buttons (View + Portal) + optional images.",
    sec_bookchapter: "Book Chapter",
    sec_bookchapter_sub: "Each item has 2 buttons + description + optional images.",
    sec_editedbook: "Edited Book",
    sec_editedbook_sub: "Each item has 2 buttons + description + optional images.",
    sec_achievements: "Recognition & Achievements",
    sec_achievements_sub: "9 achievements • BIG premium 3D cards • 2 images + 2 links each.",
    sec_contact: "Contact",
    sec_contact_sub: "Let’s collaborate — AI, full-stack, robotics, research.",

    // Loader
    loader_text: "Loading…",
    loader_hint: "Tip: Change loader style in <b>style.css</b> (search: LOADER)",

    // About section hard-coded texts
    about_who_iam: "Who I am",
    about_quick_links: "Quick Links",
    about_links_muted: "All links are functional from script.js",

    // Skills hard-coded headings & notes
    skills_languages_core: "Languages & Core",
    skills_fullstack: "Full-Stack",
    skills_tools_platforms: "Tools & Platforms",
    skills_ai_ml: "AI / ML",
    skills_cloud_devops: "Cloud / DevOps",
    skills_research_tools: "Research / Tools",

    skills_note_edit: "Edit icons anytime in script.js",
    skills_note_mern: "MERN + modern UI.",
    skills_note_deploy: "Deployment-ready.",
    skills_note_ai: "12+ stacks supported (script.js)",
    skills_note_cloud: "Add your tools + platforms.",
    skills_note_research: "Paper writing + tooling.",

    // Certificates slider
    cert_more_title: "More certificates",
    cert_more_hint: "Auto-scroll • customize in script.js",

    // Contact section
    contact_send_message: "Send a Message",
    contact_form_hint: "Form sizing fixed + responsive.",
    contact_quick_info: "Quick Info",
    contact_reply_fast: "I reply fastest on email / LinkedIn.",
    contact_location: "Location",
    contact_email: "Email",
    contact_phone: "Phone",

    // Contact form placeholders & button
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    form_send: "Send (demo)",
    form_backend_hint: "Connect EmailJS / backend later.",

    // Footer
    foot_name: "Yogendra Bharadwaj",
    foot_tag: "AI • Full-Stack • Research",
    foot_note: "© {year} Yogendra Bharadwaj. Built with a 3D-modern UI.",
    foot_quick: "Quick Links",
    foot_schedule: "Schedule Meeting",
    foot_schedule_hint: "Request a meeting (demo). You can connect Calendly/Google Calendar later.",
    foot_newsletter: "Newsletter",
    foot_news_hint: "Get updates about my work & research (demo).",
    foot_privacy: "Privacy",
    foot_terms: "Terms",
    foot_sitemap: "Sitemap",
    foot_backtop: "↑ Back to top",

    meet_name: "Your Name",
    meet_email: "Your Email",
    meet_when: "Preferred Date & Time",
    meet_topic: "Topic (AI / Full-stack / Research)",
    meet_request: "Request (demo)",

    news_email: "Email address",
    news_subscribe: "Subscribe"
  },

  hi: {
    nav_about: "परिचय",
    nav_skills: "कौशल",
    nav_experience: "अनुभव",
    nav_education: "शिक्षा",
    nav_projects: "प्रोजेक्ट्स",
    nav_cert: "प्रमाणपत्र",
    nav_reco: "सिफारिशें",
    nav_media: "मीडिया",
    nav_glimpse: "वीडियो झलक",
    nav_blogs: "ब्लॉग",
    nav_linkedin: "लिंक्डइन",
    nav_publications: "प्रकाशन",
    nav_patents: "पेटेंट",
    nav_bookchapter: "पुस्तक अध्याय",
    nav_editedbook: "संपादित पुस्तक",
    nav_achievements: "मान्यता",
    nav_contact: "संपर्क",
    // Buttons
btn_view_projects: "प्रोजेक्ट्स देखें",
btn_contact_me: "संपर्क करें",
btn_resume: "रिज़्यूमे डाउनलोड करें",

// Hero featured section
hero_featured: "प्रमुख हाइलाइट",
hero_featured_sub: "यहाँ बड़ा हीरो पोस्टर इमेज जोड़ें (कोड लिंक)",


    hero_kicker: "AI • फुल-स्टैक • रिसर्च",
    hero_title_1: "बुद्धिमान उत्पाद + शोध कार्य का निर्माण",
    hero_title_3: "3D-आधुनिक",
    hero_title_4: "अनुभव।",
    hero_subtitle: "परिणाम-उन्मुख AI सॉफ्टवेयर डेवलपर जिसके पास बुद्धिमान एवं वेब-आधारित एप्लिकेशनों में व्यावहारिक अनुभव है। मजबूत शोध उत्पादन वाला AI विशेषज्ञ (पेपर, पेटेंट, पुस्तक कार्य)।",
    hero_profile_summary: "प्रोफ़ाइल सारांश",
    hero_highlight: "हाइलाइट",
    hero_now: "अभी",

    btn_view_projects: "प्रोजेक्ट्स देखें",
    btn_contact_me: "संपर्क करें",
    btn_resume: "रिज्यूमे डाउनलोड करें",

    sec_about: "परिचय",
    sec_about_sub: "मैं क्या करता हूँ और मेरा फोकस क्या है।",
    sec_skills: "तकनीकी विशेषज्ञता",
    sec_skills_sub: "स्टैक लोगो शामिल हैं।",
    sec_experience: "कार्य अनुभव",
    sec_experience_sub: "प्रत्येक कार्ड में 2 इमेज + प्रमाणपत्र PDF + 2 लिंक बटन (कोड से)।",
    sec_education: "शिक्षा",
    sec_education_sub: "लोगो + मीडिया स्लॉट कोड से।",
    sec_projects: "प्रोजेक्ट्स",
    sec_projects_sub: "6+ कार्ड + ऑटो-स्वैप स्लाइडर। प्रत्येक प्रोजेक्ट में 2 इमेज + 2 लिंक।",
    sec_certificates: "प्रमाणपत्र",
    sec_certificates_sub: "6 प्रमुख प्रमाणपत्र + स्लाइडर (प्रोजेक्ट्स से अलग डिज़ाइन)।",
    sec_recommendations: "सिफारिशें",
    sec_recommendations_sub: "बाहरी सिफारिश इमेज + लिंक्डइन सिफारिशें (script.js में जोड़ें/संपादित करें)।",
    sec_media: "मीडिया",
    sec_media_sub: "ऑटो स्लाइडर • होवर ज़ूम • शीर्षक/उपशीर्षक + 5–7 लाइनें (कोड से)।",
    sec_glimpse: "वीडियो झलक",
    sec_glimpse_sub: "अंदर कोई टेक्स्ट नहीं — वीडियो ऑटोप्ले, म्यूट, लूप। साइज़ CSS से एडजस्ट करें।",
    sec_blogs: "ब्लॉग",
    sec_blogs_sub: "स्थानीय ब्लॉग + वैकल्पिक बाहरी RSS फेच (कोड से)।",
    sec_linkedin: "लिंक्डइन पोस्ट",
    sec_linkedin_sub: "पिछले 4–5 पोस्ट कार्ड (मैनुअल लिंक या एम्बेड स्निपेट)।",
    sec_publications: "प्रकाशन",
    sec_publications_sub: "प्रत्येक आइटम: शीर्षक/उपशीर्षक/मेटा + 5 लाइनें + 2 बटन + 2 इमेज (वैकल्पिक)।",
    sec_patents: "पेटेंट",
    sec_patents_sub: "प्रत्येक आइटम: 2 बटन (देखें + पोर्टल) + वैकल्पिक इमेज।",
    sec_bookchapter: "पुस्तक अध्याय",
    sec_bookchapter_sub: "प्रत्येक आइटम में 2 बटन + विवरण + वैकल्पिक इमेज।",
    sec_editedbook: "संपादित पुस्तक",
    sec_editedbook_sub: "प्रत्येक आइटम में 2 बटन + विवरण + वैकल्पिक इमेज।",
    sec_achievements: "मान्यता एवं उपलब्धियाँ",
    sec_achievements_sub: "9 उपलब्धियाँ • बड़े प्रीमियम 3D कार्ड • प्रत्येक में 2 इमेज + 2 लिंक।",
    sec_contact: "संपर्क",
    sec_contact_sub: "आइए सहयोग करें — AI, फुल-स्टैक, रोबोटिक्स, रिसर्च।",

    loader_text: "लोड हो रहा है…",
    loader_hint: "टिप: <b>style.css</b> में लोडर स्टाइल बदलें (LOADER खोजें)",

    about_who_iam: "मैं कौन हूँ",
    about_quick_links: "त्वरित लिंक",
    about_links_muted: "सभी लिंक script.js से काम करते हैं",

    skills_languages_core: "भाषाएँ और कोर",
    skills_fullstack: "फुल-स्टैक",
    skills_tools_platforms: "टूल्स और प्लेटफॉर्म",
    skills_ai_ml: "AI / ML",
    skills_cloud_devops: "क्लाउड / DevOps",
    skills_research_tools: "शोध / टूल्स",

    skills_note_edit: "script.js में आइकॉन कभी भी बदलें",
    skills_note_mern: "MERN + आधुनिक UI।",
    skills_note_deploy: "डिप्लॉयमेंट के लिए तैयार।",
    skills_note_ai: "12+ स्टैक समर्थित (script.js)",
    skills_note_cloud: "अपने टूल्स + प्लेटफॉर्म जोड़ें।",
    skills_note_research: "पेपर लेखन + टूलिंग।",

    cert_more_title: "अधिक प्रमाणपत्र",
    cert_more_hint: "स्वचालित स्क्रॉल • script.js में अनुकूलित करें",

    contact_send_message: "संदेश भेजें",
    contact_form_hint: "फॉर्म साइज फिक्स्ड + रिस्पॉन्सिव।",
    contact_quick_info: "त्वरित जानकारी",
    contact_reply_fast: "मैं ईमेल / LinkedIn पर सबसे तेज़ जवाब देता हूँ।",
    contact_location: "स्थान",
    contact_email: "ईमेल",
    contact_phone: "फोन",

    form_name: "आपका नाम",
    form_email: "आपका ईमेल",
    form_subject: "विषय",
    form_message: "आपका संदेश",
    form_send: "भेजें (डेमो)",
    form_backend_hint: "EmailJS / बैकएंड बाद में कनेक्ट करें।",

    foot_name: "योगेंद्र भारद्वाज",
    foot_tag: "AI • फुल-स्टैक • रिसर्च",
    foot_note: "© {year} योगेंद्र भारद्वाज। 3D-आधुनिक UI के साथ बनाया गया।",
    foot_quick: "त्वरित लिंक",
    foot_schedule: "मीटिंग शेड्यूल करें",
    foot_schedule_hint: "मीटिंग रिक्वेस्ट (डेमो)। Calendly/Google Calendar बाद में जोड़ सकते हैं।",
    foot_newsletter: "न्यूज़लेटर",
    foot_news_hint: "मेरे काम और रिसर्च के अपडेट प्राप्त करें (डेमो)।",
    foot_privacy: "गोपनीयता",
    foot_terms: "शर्तें",
    foot_sitemap: "साइटमैप",
    foot_backtop: "↑ ऊपर जाएँ",

    meet_name: "आपका नाम",
    meet_email: "आपका ईमेल",
    meet_when: "पसंदीदा तारीख और समय",
    meet_topic: "विषय (AI / फुल-स्टैक / रिसर्च)",
    meet_request: "रिक्वेस्ट करें (डेमो)",

    news_email: "ईमेल पता",
    news_subscribe: "सब्सक्राइब करें"
  },

  fr: {
    // French translations (basic)
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_education: "Éducation",
    nav_projects: "Projets",
    nav_cert: "Certificats",
    nav_reco: "Recommandations",
    nav_media: "Médias",
    nav_glimpse: "Aperçu vidéo",
    nav_blogs: "Blogs",
    nav_linkedin: "Publications LinkedIn",
    nav_publications: "Publications",
    nav_patents: "Brevets",
    nav_bookchapter: "Chapitre de livre",
    nav_editedbook: "Livre édité",
    nav_achievements: "Reconnaissances",
    nav_contact: "Contact",

    hero_kicker: "IA • Full-Stack • Recherche",
    hero_title_1: "Création de produits intelligents + travaux de recherche",
    hero_title_3: "3D-moderne",
    hero_title_4: "expérience.",
    hero_subtitle: "Développeur logiciel IA orienté résultats avec expérience pratique dans applications intelligentes et web.",
    hero_profile_summary: "Résumé du profil",
    hero_highlight: "Mise en avant",
    hero_now: "Maintenant",

    btn_view_projects: "Voir les projets",
    btn_contact_me: "Me contacter",
    btn_resume: "Télécharger le CV",

    sec_about: "À propos",
    sec_about_sub: "Ce que je fais et sur quoi je me concentre.",
    sec_skills: "Expertise technique",
    sec_skills_sub: "Logos de stack inclus.",
    sec_experience: "Expérience professionnelle",
    sec_experience_sub: "Chaque carte supporte 2 images + PDF de certificat + 2 boutons de lien.",
    sec_education: "Éducation",
    sec_education_sub: "Logos + emplacements média depuis le code.",
    sec_projects: "Projets",
    sec_projects_sub: "6+ cartes + slider auto-swap.",
    sec_certificates: "Certificats",
    sec_certificates_sub: "6 certificats en vedette + slider.",
    sec_recommendations: "Recommandations",
    sec_recommendations_sub: "Images de recommandations externes + LinkedIn.",
    sec_media: "Médias",
    sec_media_sub: "Slider auto • zoom au survol.",
    sec_glimpse: "Aperçu vidéo",
    sec_glimpse_sub: "Pas de texte — vidéo autoplay, muet, boucle.",
    sec_blogs: "Blogs",
    sec_blogs_sub: "Blogs locaux + RSS externe optionnel.",
    sec_linkedin: "Publications LinkedIn",
    sec_linkedin_sub: "4–5 derniers posts en cartes.",
    sec_publications: "Publications",
    sec_publications_sub: "Chaque élément : titre + 5 lignes + 2 boutons.",
    sec_patents: "Brevets",
    sec_patents_sub: "2 boutons + images optionnelles.",
    sec_bookchapter: "Chapitre de livre",
    sec_bookchapter_sub: "2 boutons + description + images.",
    sec_editedbook: "Livre édité",
    sec_editedbook_sub: "2 boutons + description + images.",
    sec_achievements: "Reconnaissances & Réalisations",
    sec_achievements_sub: "9 reconnaissances • grandes cartes 3D.",
    sec_contact: "Contact",
    sec_contact_sub: "Collaborons — IA, full-stack, robotique, recherche.",

    loader_text: "Chargement…",
    loader_hint: "Astuce : Changez le style du loader dans <b>style.css</b>",

    about_who_iam: "Qui je suis",
    about_quick_links: "Liens rapides",
    about_links_muted: "Tous les liens fonctionnent depuis script.js",

    skills_languages_core: "Langages & Core",
    skills_fullstack: "Full-Stack",
    skills_tools_platforms: "Outils & Plateformes",
    skills_ai_ml: "IA / ML",
    skills_cloud_devops: "Cloud / DevOps",
    skills_research_tools: "Recherche / Outils",

    skills_note_edit: "Modifiez les icônes dans script.js",
    skills_note_mern: "MERN + interface moderne.",
    skills_note_deploy: "Prêt au déploiement.",
    skills_note_ai: "12+ stacks supportés (script.js)",
    skills_note_cloud: "Ajoutez vos outils + plateformes.",
    skills_note_research: "Rédaction de papiers + outils.",

    cert_more_title: "Plus de certificats",
    cert_more_hint: "Défilement auto • personnaliser dans script.js",

    contact_send_message: "Envoyer un message",
    contact_form_hint: "Formulaire taille fixe + responsive.",
    contact_quick_info: "Infos rapides",
    contact_reply_fast: "Je réponds le plus vite par email / LinkedIn.",
    contact_location: "Localisation",
    contact_email: "Email",
    contact_phone: "Téléphone",

    form_name: "Votre nom",
    form_email: "Votre email",
    form_subject: "Sujet",
    form_message: "Votre message",
    form_send: "Envoyer (démo)",
    form_backend_hint: "Connectez EmailJS / backend plus tard.",

    foot_name: "Yogendra Bharadwaj",
    foot_tag: "IA • Full-Stack • Recherche",
    foot_note: "© {year} Yogendra Bharadwaj. Construit avec une UI 3D-moderne.",
    foot_quick: "Liens rapides",
    foot_schedule: "Planifier un rendez-vous",
    foot_schedule_hint: "Demande de rendez-vous (démo).",
    foot_newsletter: "Newsletter",
    foot_news_hint: "Recevez des mises à jour sur mon travail (démo).",
    foot_privacy: "Confidentialité",
    foot_terms: "Conditions",
    foot_sitemap: "Plan du site",
    foot_backtop: "↑ Retour en haut",

    meet_name: "Votre nom",
    meet_email: "Votre email",
    meet_when: "Date et heure préférées",
    meet_topic: "Sujet (IA / Full-stack / Recherche)",
    meet_request: "Demander (démo)",

    news_email: "Adresse email",
    news_subscribe: "S'abonner"
  },

  de: {
  nav_about: "Über mich",
  nav_skills: "Fähigkeiten",
  nav_experience: "Erfahrung",
  nav_education: "Ausbildung",
  nav_projects: "Projekte",
  nav_cert: "Zertifikate",
  nav_reco: "Empfehlungen",
  nav_media: "Medien",
  nav_glimpse: "Video-Einblick",
  hero_featured: "Hervorgehobenes Highlight",
hero_featured_sub: "Fügen Sie hier ein großes Hero-Posterbild hinzu (Code-Link)",

  nav_blogs: "Blogs",
  nav_linkedin: "LinkedIn",
  nav_publications: "Publikationen",
  nav_patents: "Patente",
  nav_bookchapter: "Buchkapitel",
  nav_editedbook: "Herausgegebenes Buch",
  nav_achievements: "Anerkennung",
  nav_contact: "Kontakt",

  hero_kicker: "KI • Full-Stack • Forschung",
  hero_title_1: "Intelligente Produkte & Forschungsarbeit",
  hero_title_3: "3D-modern",
  hero_title_4: "Erlebnis.",
  hero_subtitle:
    "Ergebnisorientierter KI-Softwareentwickler mit praktischer Erfahrung in intelligenten und webbasierten Anwendungen.",
  hero_profile_summary: "Profilübersicht",
  hero_highlight: "Highlight",
  hero_now: "Jetzt",

  btn_view_projects: "Projekte ansehen",
  btn_contact_me: "Kontakt aufnehmen",
  btn_resume: "Lebenslauf herunterladen",

  sec_about: "Über mich",
  sec_about_sub: "Was ich mache und worauf ich mich konzentriere.",
  sec_skills: "Technische Expertise",
  sec_skills_sub: "Stack-Logos enthalten.",
  sec_experience: "Berufserfahrung",
  sec_experience_sub: "Detaillierte Arbeitserfahrung.",
  sec_education: "Ausbildung",
  sec_education_sub: "Akademischer Hintergrund.",
  sec_projects: "Projekte",
  sec_projects_sub: "Ausgewählte technische Projekte.",
  sec_certificates: "Zertifikate",
  sec_certificates_sub: "Berufliche Zertifizierungen.",
  sec_recommendations: "Empfehlungen",
  sec_recommendations_sub: "Feedback von Kollegen.",
  sec_media: "Medien",
  sec_media_sub: "Interviews, Vorträge & Highlights.",
  sec_glimpse: "Video-Einblick",
  sec_glimpse_sub: "Kurze visuelle Einführung.",
  sec_blogs: "Blogs",
  sec_blogs_sub: "Gedanken & technische Artikel.",
  sec_linkedin: "LinkedIn-Beiträge",
  sec_linkedin_sub: "Neueste berufliche Updates.",
  sec_publications: "Publikationen",
  sec_publications_sub: "Forschungsveröffentlichungen.",
  sec_patents: "Patente",
  sec_patents_sub: "Eingereichte & erteilte Patente.",
  sec_bookchapter: "Buchkapitel",
  sec_bookchapter_sub: "Veröffentlichte Buchkapitel.",
  sec_editedbook: "Herausgegebenes Buch",
  sec_editedbook_sub: "Von mir herausgegebene Bücher.",
  sec_achievements: "Anerkennungen & Erfolge",
  sec_achievements_sub: "Auszeichnungen & Ehrungen.",
  sec_contact: "Kontakt",
  sec_contact_sub: "Lass uns zusammenarbeiten.",

  loader_text: "Lädt…",

  about_who_iam: "Wer ich bin",
  about_quick_links: "Schnellzugriff",

  skills_languages_core: "Sprachen & Grundlagen",
  skills_fullstack: "Full-Stack",
  skills_tools_platforms: "Tools & Plattformen",
  skills_ai_ml: "KI / ML",
  skills_cloud_devops: "Cloud / DevOps",
  skills_research_tools: "Forschung / Tools",

  contact_send_message: "Nachricht senden",

  form_name: "Ihr Name",
  form_email: "Ihre E-Mail",
  form_subject: "Betreff",
  form_message: "Nachricht",
  form_send: "Senden",

  foot_backtop: "↑ Nach oben"
},
es: {
  nav_about: "Sobre mí",
  nav_skills: "Habilidades",
  nav_experience: "Experiencia",
  nav_education: "Educación",
  hero_featured: "Destacado",
hero_featured_sub: "Agrega aquí una imagen grande del héroe (enlace de código)",

  nav_projects: "Proyectos",
  nav_cert: "Certificados",
  nav_reco: "Recomendaciones",
  nav_media: "Medios",
  nav_glimpse: "Vista previa",
  nav_blogs: "Blogs",
  nav_linkedin: "LinkedIn",
  nav_publications: "Publicaciones",
  nav_patents: "Patentes",
  nav_bookchapter: "Capítulo de libro",
  nav_editedbook: "Libro editado",
  nav_achievements: "Reconocimientos",
  nav_contact: "Contacto",

  hero_kicker: "IA • Full-Stack • Investigación",
  hero_title_1: "Productos inteligentes y trabajo de investigación",
  hero_title_3: "3D-moderno",
  hero_title_4: "experiencia.",
  hero_subtitle:
    "Desarrollador de software de IA orientado a resultados con experiencia práctica en aplicaciones inteligentes y web.",
  hero_profile_summary: "Resumen del perfil",
  hero_highlight: "Destacado",
  hero_now: "Ahora",

  btn_view_projects: "Ver proyectos",
  btn_contact_me: "Contáctame",
  btn_resume: "Descargar CV",

  sec_about: "Sobre mí",
  sec_about_sub: "Qué hago y en qué me enfoco.",
  sec_skills: "Experiencia técnica",
  sec_skills_sub: "Logos de stacks incluidos.",
  sec_experience: "Experiencia laboral",
  sec_experience_sub: "Experiencia profesional detallada.",
  sec_education: "Educación",
  sec_education_sub: "Formación académica.",
  sec_projects: "Proyectos",
  sec_projects_sub: "Proyectos técnicos destacados.",
  sec_certificates: "Certificados",
  sec_certificates_sub: "Certificaciones profesionales.",
  sec_recommendations: "Recomendaciones",
  sec_recommendations_sub: "Opiniones de colegas.",
  sec_media: "Medios",
  sec_media_sub: "Charlas, entrevistas y logros.",
  sec_glimpse: "Vista previa",
  sec_glimpse_sub: "Introducción visual breve.",
  sec_blogs: "Blogs",
  sec_blogs_sub: "Pensamientos y artículos técnicos.",
  sec_linkedin: "Publicaciones de LinkedIn",
  sec_linkedin_sub: "Últimas actualizaciones profesionales.",
  sec_publications: "Publicaciones",
  sec_publications_sub: "Publicaciones de investigación.",
  sec_patents: "Patentes",
  sec_patents_sub: "Patentes registradas y otorgadas.",
  sec_bookchapter: "Capítulo de libro",
  sec_bookchapter_sub: "Capítulos de libros publicados.",
  sec_editedbook: "Libro editado",
  sec_editedbook_sub: "Libros editados por mí.",
  sec_achievements: "Reconocimientos y logros",
  sec_achievements_sub: "Premios y honores.",
  sec_contact: "Contacto",
  sec_contact_sub: "Colaboremos.",

  loader_text: "Cargando…",

  about_who_iam: "Quién soy",
  about_quick_links: "Enlaces rápidos",

  skills_languages_core: "Lenguajes y fundamentos",
  skills_fullstack: "Full-Stack",
  skills_tools_platforms: "Herramientas y plataformas",
  skills_ai_ml: "IA / ML",
  skills_cloud_devops: "Cloud / DevOps",
  skills_research_tools: "Investigación / Herramientas",

  contact_send_message: "Enviar mensaje",

  form_name: "Tu nombre",
  form_email: "Tu correo",
  form_subject: "Asunto",
  form_message: "Mensaje",
  form_send: "Enviar",

  foot_backtop: "↑ Volver arriba"
},
ja: {
  nav_about: "概要",
  nav_skills: "スキル",
  nav_experience: "経験",
  hero_featured: "注目のハイライト",
hero_featured_sub: "ここに大きなヒーロー画像を hookup してください（コードリンク）",

  nav_education: "学歴",
  nav_projects: "プロジェクト",
  nav_cert: "認定証",
  nav_reco: "推薦",
  nav_media: "メディア",
  nav_glimpse: "ビデオ紹介",
  nav_blogs: "ブログ",
  nav_linkedin: "LinkedIn",
  nav_publications: "出版物",
  nav_patents: "特許",
  nav_bookchapter: "書籍章",
  nav_editedbook: "編集書籍",
  nav_achievements: "実績",
  nav_contact: "連絡先",

  hero_kicker: "AI • フルスタック • 研究",
  hero_title_1: "知的プロダクトと研究活動",
  hero_title_3: "3Dモダン",
  hero_title_4: "体験。",
  hero_subtitle:
    "知的およびWebベースのアプリケーションに実務経験を持つ成果志向のAIソフトウェア開発者。",
  hero_profile_summary: "プロフィール概要",
  hero_highlight: "ハイライト",
  hero_now: "現在",

  btn_view_projects: "プロジェクトを見る",
  btn_contact_me: "連絡する",
  btn_resume: "履歴書をダウンロード",

  sec_about: "概要",
  sec_about_sub: "私の活動内容と注力分野。",
  sec_skills: "技術的専門知識",
  sec_skills_sub: "スタックロゴ付き。",
  sec_experience: "職務経験",
  sec_experience_sub: "詳細な職務経験。",
  sec_education: "学歴",
  sec_education_sub: "学術的背景。",
  sec_projects: "プロジェクト",
  sec_projects_sub: "注目の技術プロジェクト。",
  sec_certificates: "認定証",
  sec_certificates_sub: "専門資格。",
  sec_recommendations: "推薦",
  sec_recommendations_sub: "同僚からの評価。",
  sec_media: "メディア",
  sec_media_sub: "講演、インタビュー、実績。",
  sec_glimpse: "ビデオ紹介",
  sec_glimpse_sub: "短いビジュアル紹介。",
  sec_blogs: "ブログ",
  sec_blogs_sub: "考察と技術記事。",
  sec_linkedin: "LinkedIn投稿",
  sec_linkedin_sub: "最新の活動。",
  sec_publications: "出版物",
  sec_publications_sub: "研究出版物。",
  sec_patents: "特許",
  sec_patents_sub: "申請・取得済み特許。",
  sec_bookchapter: "書籍章",
  sec_bookchapter_sub: "出版された書籍章。",
  sec_editedbook: "編集書籍",
  sec_editedbook_sub: "編集した書籍。",
  sec_achievements: "実績と表彰",
  sec_achievements_sub: "受賞歴と功績。",
  sec_contact: "連絡先",
  sec_contact_sub: "一緒に協力しましょう。",

  loader_text: "読み込み中…",

  about_who_iam: "私について",
  about_quick_links: "クイックリンク",

  skills_languages_core: "言語と基礎",
  skills_fullstack: "フルスタック",
  skills_tools_platforms: "ツールとプラットフォーム",
  skills_ai_ml: "AI / ML",
  skills_cloud_devops: "クラウド / DevOps",
  skills_research_tools: "研究 / ツール",

  contact_send_message: "メッセージを送信",

  form_name: "お名前",
  form_email: "メール",
  form_subject: "件名",
  form_message: "メッセージ",
  form_send: "送信",

  foot_backtop: "↑ トップへ戻る"
},
zh: {
  nav_about: "关于我",
  nav_skills: "技能",
  nav_experience: "经验",
  nav_education: "教育",
  nav_projects: "项目",
  hero_featured: "精选亮点",
hero_featured_sub: "在此添加大型主视觉图片（代码链接）",

  nav_cert: "证书",
  nav_reco: "推荐",
  nav_media: "媒体",
  nav_glimpse: "视频简介",
  nav_blogs: "博客",
  nav_linkedin: "领英",
  nav_publications: "出版物",
  nav_patents: "专利",
  nav_bookchapter: "书籍章节",
  nav_editedbook: "编辑书籍",
  nav_achievements: "成就",
  nav_contact: "联系",

  hero_kicker: "人工智能 • 全栈 • 研究",
  hero_title_1: "智能产品与研究工作",
  hero_title_3: "3D现代",
  hero_title_4: "体验。",
  hero_subtitle:
    "以结果为导向的AI软件开发人员，拥有智能和Web应用的实践经验。",
  hero_profile_summary: "个人简介",
  hero_highlight: "亮点",
  hero_now: "现在",

  btn_view_projects: "查看项目",
  btn_contact_me: "联系我",
  btn_resume: "下载简历",

  sec_about: "关于我",
  sec_about_sub: "我的工作内容和专注方向。",
  sec_skills: "技术专长",
  sec_skills_sub: "包含技术栈图标。",
  sec_experience: "工作经验",
  sec_experience_sub: "详细的职业经验。",
  sec_education: "教育背景",
  sec_education_sub: "学术背景。",
  sec_projects: "项目",
  sec_projects_sub: "重点技术项目。",
  sec_certificates: "证书",
  sec_certificates_sub: "专业认证。",
  sec_recommendations: "推荐",
  sec_recommendations_sub: "同事评价。",
  sec_media: "媒体",
  sec_media_sub: "演讲、采访和亮点。",
  sec_glimpse: "视频简介",
  sec_glimpse_sub: "简短视觉介绍。",
  sec_blogs: "博客",
  sec_blogs_sub: "技术文章与思考。",
  sec_linkedin: "领英动态",
  sec_linkedin_sub: "最新职业更新。",
  sec_publications: "出版物",
  sec_publications_sub: "研究论文。",
  sec_patents: "专利",
  sec_patents_sub: "已申请和授权的专利。",
  sec_bookchapter: "书籍章节",
  sec_bookchapter_sub: "已出版章节。",
  sec_editedbook: "编辑书籍",
  sec_editedbook_sub: "我编辑的书籍。",
  sec_achievements: "成就与荣誉",
  sec_achievements_sub: "奖项与表彰。",
  sec_contact: "联系",
  sec_contact_sub: "欢迎合作。",

  loader_text: "加载中…",

  about_who_iam: "我是谁",
  about_quick_links: "快速链接",

  skills_languages_core: "语言与基础",
  skills_fullstack: "全栈",
  skills_tools_platforms: "工具与平台",
  skills_ai_ml: "AI / ML",
  skills_cloud_devops: "云 / DevOps",
  skills_research_tools: "研究 / 工具",

  contact_send_message: "发送消息",

  form_name: "你的名字",
  form_email: "你的邮箱",
  form_subject: "主题",
  form_message: "留言",
  form_send: "发送",

  foot_backtop: "↑ 返回顶部"
}

};

// Simple t() helper
function t(langKey, token, fallback) {
  return TEXT[langKey]?.[token] || TEXT.en?.[token] || fallback || token;
}

// Apply language function (same)
function applyLanguage(langKey) {
  document.documentElement.lang = langKey;
  document.documentElement.setAttribute("lang", langKey);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const token = el.getAttribute("data-i18n");
    const fallback = el.textContent.trim();
    el.textContent = t(langKey, token, fallback);
  });

  const langCodeEl = document.getElementById("langCode");
  const langMeta = LANGUAGES.find(l => l.key === langKey) || LANGUAGES[0];
  if (langCodeEl) langCodeEl.textContent = langMeta.code;

  localStorage.setItem("lang", langKey);
}

// Bind tokens – improved version
function bindI18nTokens() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    const links = Array.from(nav.querySelectorAll("a"));
    const byHref = (hash) => links.find(a => a.getAttribute("href") === hash);

    byHref("#about")?.setAttribute("data-i18n", "nav_about");
    byHref("#skills")?.setAttribute("data-i18n", "nav_skills");
    byHref("#experience")?.setAttribute("data-i18n", "nav_experience");
    byHref("#education")?.setAttribute("data-i18n", "nav_education");
    byHref("#projects")?.setAttribute("data-i18n", "nav_projects");
    byHref("#certifications")?.setAttribute("data-i18n", "nav_cert");
    byHref("#recommendations")?.setAttribute("data-i18n", "nav_reco");
    byHref("#media")?.setAttribute("data-i18n", "nav_media");
    byHref("#glimpse")?.setAttribute("data-i18n", "nav_glimpse");
    byHref("#blogs")?.setAttribute("data-i18n", "nav_blogs");
    byHref("#linkedin")?.setAttribute("data-i18n", "nav_linkedin");
    byHref("#publications")?.setAttribute("data-i18n", "nav_publications");
    byHref("#patents")?.setAttribute("data-i18n", "nav_patents");
    byHref("#bookchapter")?.setAttribute("data-i18n", "nav_bookchapter");
    byHref("#editedbook")?.setAttribute("data-i18n", "nav_editedbook");
    byHref("#achievements")?.setAttribute("data-i18n", "nav_achievements");
    byHref("#contact")?.setAttribute("data-i18n", "nav_contact");
  }

  // Hero CTA
  const ctaBtns = document.querySelectorAll("#home .ctaRow .btn");
  if (ctaBtns.length >= 3) {
    ctaBtns[0].setAttribute("data-i18n", "btn_view_projects");
    ctaBtns[1].setAttribute("data-i18n", "btn_contact_me");
    ctaBtns[2].setAttribute("data-i18n", "btn_resume");
  }

  // All section headings + sub
  const sections = [
    { id: "about", h2: "sec_about", p: "sec_about_sub" },
    { id: "skills", h2: "sec_skills", p: "sec_skills_sub" },
    { id: "experience", h2: "sec_experience", p: "sec_experience_sub" },
    { id: "education", h2: "sec_education", p: "sec_education_sub" },
    { id: "projects", h2: "sec_projects", p: "sec_projects_sub" },
    { id: "certifications", h2: "sec_certificates", p: "sec_certificates_sub" },
    { id: "recommendations", h2: "sec_recommendations", p: "sec_recommendations_sub" },
    { id: "media", h2: "sec_media", p: "sec_media_sub" },
    { id: "glimpse", h2: "sec_glimpse", p: "sec_glimpse_sub" },
    { id: "blogs", h2: "sec_blogs", p: "sec_blogs_sub" },
    { id: "linkedin", h2: "sec_linkedin", p: "sec_linkedin_sub" },
    { id: "publications", h2: "sec_publications", p: "sec_publications_sub" },
    { id: "patents", h2: "sec_patents", p: "sec_patents_sub" },
    { id: "bookchapter", h2: "sec_bookchapter", p: "sec_bookchapter_sub" },
    { id: "editedbook", h2: "sec_editedbook", p: "sec_editedbook_sub" },
    { id: "achievements", h2: "sec_achievements", p: "sec_achievements_sub" },
    { id: "contact", h2: "sec_contact", p: "sec_contact_sub" }
  ];

  sections.forEach(s => {
    document.querySelector(`#${s.id} h2`)?.setAttribute("data-i18n", s.h2);
    document.querySelector(`#${s.id} .sectionHead p`)?.setAttribute("data-i18n", s.p);
  });

  // Hero special parts
  document.querySelector(".kicker")?.setAttribute("data-i18n", "hero_kicker");
  document.querySelector(".heroLeft .title span:nth-child(1)")?.setAttribute("data-i18n", "hero_title_1");
  document.querySelector(".heroLeft .title .grad")?.setAttribute("data-i18n", "hero_title_3");
  document.querySelector(".heroLeft .title span:last-child")?.setAttribute("data-i18n", "hero_title_4");
  document.querySelector(".heroLeft .subtitle")?.setAttribute("data-i18n", "hero_subtitle");
}

// Init UI (same)
function initLanguageUI() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  if (!btn || !menu) return;

  menu.innerHTML = LANGUAGES.map(l => `
    <button class="langItem" role="option" data-lang="${l.key}">
      <span class="langLeft">
        <span class="langFlag">${l.flag}</span>
        <span class="langName">${l.name}</span>
      </span>
      <span class="langKey">${l.code}</span>
    </button>
  `).join("");

  const closeMenu = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", menu.classList.contains("open"));
  });

  menu.addEventListener("click", e => {
    const item = e.target.closest(".langItem");
    if (item) {
      applyLanguage(item.dataset.lang);
      closeMenu();
    }
  });

  document.addEventListener("click", closeMenu);
}
// Run initialization
bindI18nTokens();
initLanguageUI();
applyLanguage(localStorage.getItem("lang") || "en");
// =====================
// Resume + year
// =====================
document.getElementById("resumeBtn")?.setAttribute("href", safeUrl(PROFILE.resumeUrl));
document.getElementById("year").innerText = new Date().getFullYear();

// =====================
// Hero images + text
// =====================
const profileImg = document.getElementById("profileImg");
if (profileImg) profileImg.src = safeText(PROFILE.profileImg, "assets/profile.jpg");

const heroBannerImg = document.getElementById("heroBannerImg");
if (heroBannerImg){
  const src = safeText(PROFILE.heroBannerImg, "");
  if (src){
    heroBannerImg.src = src;
    heroBannerImg.addEventListener("load", () => heroBannerImg.classList.add("ready"));
  }
}

const bulletsEl = document.getElementById("profileBullets");
if (bulletsEl){
  bulletsEl.innerHTML = HERO.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
}
const badgesEl = document.getElementById("heroBadges");
if (badgesEl){
  badgesEl.innerHTML = HERO.badges.map(x => `<span class="badge">${escapeHtml(x)}</span>`).join("");
}
document.getElementById("heroFloat1").textContent = HERO.float1;
document.getElementById("heroFloat2").textContent = HERO.float2;

// =====================
// About
// =====================
document.getElementById("aboutText").textContent = ABOUT.text;
document.getElementById("aboutFocus").textContent = ABOUT.focus;
document.getElementById("aboutTools").textContent = ABOUT.tools;

// =====================
// About quick links
// =====================
const linkGrid = document.getElementById("linkGrid");
if (linkGrid){
  const items = [
    { title:"LinkedIn", hint:"Open profile", url: PROFILE.linkedin },
    { title:"GitHub", hint:"Open repositories", url: PROFILE.github },
    { title:"Google Scholar", hint:"Open publications", url: PROFILE.scholar }
  ];
  linkGrid.innerHTML = items.map(i => `
    <a class="linkCard" href="${safeUrl(i.url)}" target="_blank" rel="noopener">
      <div class="lcTitle">${escapeHtml(i.title)}</div>
      <div class="lcHint">${escapeHtml(i.hint)}</div>
    </a>
  `).join("");
}

// =====================
// Skills render
// =====================
function renderSkills(elId, items){
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(it => `
    <div class="logoItem">
      <i class="${escapeHtml(it.icon)}"></i>
      <span>${escapeHtml(it.name)}</span>
    </div>
  `).join("");
}
renderSkills("skillsLang", SKILLS.languages);
renderSkills("skillsStack", SKILLS.stack);
renderSkills("skillsTools", SKILLS.tools);
// EXTRA SKILLS (below) — change arrays in SKILLS.ai / SKILLS.cloud / SKILLS.research
renderSkills("skillsAI", SKILLS.ai || []);
renderSkills("skillsCloud", SKILLS.cloud || []);
renderSkills("skillsResearch", SKILLS.research || []);

// =====================
// Count-up stats (fixed bug)
// =====================
const statsGrid = document.getElementById("statsGrid");
if (statsGrid){
  statsGrid.innerHTML = STATS.map((s, idx) => `
    <div class="statCard">
      <div class="statIn">
        <div class="statValue" data-target="${s.value}" data-suffix="${escapeHtml(s.suffix || "")}" id="stat-${idx}">0</div>
        <div class="statLabel">${escapeHtml(s.label)}</div>
      </div>
    </div>
  `).join("");
}

function formatNum(n){
  return n.toLocaleString("en-IN");
}
function animateCount(el, target, suffix){
  const duration = 1200;
  const start = performance.now();
  const from = 0;

  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(from + (target - from) * eased);
    el.textContent = formatNum(val) + (suffix || "");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function startCountersOnce(){
  const els = [...document.querySelectorAll(".statValue")];
  els.forEach(el => {
    const target = Number(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    animateCount(el, target, suffix);
  });
}

let countersStarted = false;
const hero = document.getElementById("home");
if (hero){
  const io = new IntersectionObserver((entries) => {
    if (!countersStarted && entries.some(e => e.isIntersecting)){
      countersStarted = true;
      startCountersOnce();
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(hero);
}

// =====================
// Media renderer (image/pdf) for cards
// =====================
function renderMediaGrid(items){
  if (!items || !items.length) return `<div class="muted">Add media in script.js</div>`;
  return items.map(m => {
    const url = safeText(m.url, "#");
    const name = safeText(m.name, "Media");
    const type = safeText(m.type, isPdf(url) ? "pdf" : "image").toLowerCase();
    const thumb = safeText(m.thumb, url);

    const thumbHtml = type === "pdf" || isPdf(url)
      ? `<div class="pdfBadge">PDF</div>`
      : `<img src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}" onerror="this.closest('.mediaCard').style.display='none'">`;

    return `
      <a class="mediaCard" href="${safeUrl(url)}" target="_blank" rel="noopener">
        <div class="mediaThumb">${thumbHtml}</div>
        <div class="mediaMeta">
          <div class="mediaName">${escapeHtml(name)}</div>
          <div class="mediaType">${escapeHtml(type.toUpperCase())}</div>
        </div>
      </a>
    `;
  }).join("");
}

function renderBtnRow(btns){
  if (!btns || !btns.length) return "";
  return btns.map(b => `
    <a class="linkBtn ${b.primary ? "primary" : ""}" href="${safeUrl(b.url)}" target="_blank" rel="noopener">
      ${escapeHtml(b.label)}
    </a>
  `).join("");
}

// =====================
// Experience render
// =====================
const expTimeline = document.getElementById("expTimeline");
if (expTimeline){
  expTimeline.innerHTML = EXPERIENCES.map(exp => `
    <div class="tItem card glass tilt">
      <div class="tIn">
        <div class="tTop">
          <div class="org">
            <img class="orgLogo" alt="${escapeHtml(exp.org)} logo" src="${escapeHtml(exp.logo)}" onerror="this.style.display='none'">
            <div>
              <div class="tRole">${escapeHtml(exp.role)}</div>
              <div class="tOrg">${escapeHtml(exp.org)}</div>
            </div>
          </div>
          <div class="tDate">${escapeHtml(exp.date)}</div>
        </div>

        <div class="tBody">
          <ul class="bullets">
            ${exp.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
          </ul>

          <div class="tagRow">
            ${exp.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>

          <div class="mediaBlock">
            <div class="mediaHead">
              <div class="mediaTitle">Certificates / Proofs</div>
              <div class="mediaSub">2 images + PDF supported</div>
            </div>
            <div class="mediaGrid">${renderMediaGrid(exp.media)}</div>
          </div>

          <div class="btnRow">
            ${renderBtnRow([
              { label: exp.links?.[0]?.label || "Link 1", url: exp.links?.[0]?.url, primary: true },
              { label: exp.links?.[1]?.label || "Link 2", url: exp.links?.[1]?.url }
            ])}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// =====================
// Education render
// =====================
const eduGrid = document.getElementById("eduGrid");
if (eduGrid){
  eduGrid.innerHTML = EDUCATION.map(ed => `
    <div class="card glass tilt cardXL">
      <div class="eduTop">
        <img class="eduLogo" alt="${escapeHtml(ed.inst)} logo" src="${escapeHtml(ed.logo)}" onerror="this.style.display='none'">
        <div>
          <div class="eduDegree">${escapeHtml(ed.degree)}</div>
          <div class="eduInst">${escapeHtml(ed.inst)}</div>
          <div class="eduDate">${escapeHtml(ed.date)}</div>
        </div>
      </div>

      <div class="mediaBlock">
        <div class="mediaHead">
          <div class="mediaTitle">Certificates / Recommendations</div>
          <div class="mediaSub">2 images + PDF supported</div>
        </div>
        <div class="mediaGrid">${renderMediaGrid(ed.media)}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// Fixed 9 project cards (above the slider)
// =====================
function renderProjectGrid9(){
  const c1 = document.getElementById("projCat1");
  const c2 = document.getElementById("projCat2");
  const c3 = document.getElementById("projCat3");
  if (!c1 || !c2 || !c3) return;

  // Update category headings (if you change titles in PROJECT_GRID_9)
  document.querySelectorAll(".projCatTitle")[0].textContent = PROJECT_GRID_9.cat1Title;
  document.querySelectorAll(".projCatTitle")[1].textContent = PROJECT_GRID_9.cat2Title;
  document.querySelectorAll(".projCatTitle")[2].textContent = PROJECT_GRID_9.cat3Title;

  const card = (p) => `
    <div class="projGridCard tilt-sm">
      <div class="pTitle">${escapeHtml(p.title)}</div>
      <div class="muted" style="margin-top:6px">${escapeHtml(p.subtitle || "")}</div>

      <div class="projStackRow">
        ${(p.stack || []).slice(0,12).map(s => `<span class="stackPill">${escapeHtml(s)}</span>`).join("")}
      </div>

      <div class="certActions" style="margin-top:12px">
        ${p.link1?.url ? `<a class="btn" href="${safeUrl(p.link1.url)}" target="_blank" rel="noopener">${escapeHtml(p.link1.label || "Link 1")}</a>` : ""}
        ${p.link2?.url ? `<a class="btn ghost" href="${safeUrl(p.link2.url)}" target="_blank" rel="noopener">${escapeHtml(p.link2.label || "Link 2")}</a>` : ""}
      </div>

      <div class="projThumb">
        <img src="${safeText(p.img, "")}" alt="${escapeHtml(p.title)}"/>
      </div>
    </div>
  `;

  c1.innerHTML = PROJECT_GRID_9.cat1.map(card).join("");
  c2.innerHTML = PROJECT_GRID_9.cat2.map(card).join("");
  c3.innerHTML = PROJECT_GRID_9.cat3.map(card).join("");
}
renderProjectGrid9();

// =====================
// Projects slider (auto swap)
// =====================
const track = document.getElementById("projectTrack");
const dots = document.getElementById("projDots");
let projIndex = 0;
let autoTimer = null;

function renderProjects(){
  if (!track) return;

  track.innerHTML = PROJECTS.map(p => `
    <div class="projectCard">
      <div class="projectIn">
        <div class="pTitle">${escapeHtml(p.title)}</div>
        <div class="pMeta">${escapeHtml(p.meta)}</div>
        <div class="pDesc">${escapeHtml(p.desc)}</div>

        <div class="cardMedia2">
          <div class="miniImg"><img src="${escapeHtml(p.img1)}" alt="project image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
          <div class="miniImg"><img src="${escapeHtml(p.img2)}" alt="project image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
        </div>

        <div class="actionRow">
          <a class="linkBtn primary" href="${safeUrl(p.github)}" target="_blank" rel="noopener">GitHub</a>
          <a class="linkBtn" href="${safeUrl(p.live)}" target="_blank" rel="noopener">Live Demo</a>
        </div>
      </div>
    </div>
  `).join("");

  if (dots){
    dots.innerHTML = PROJECTS.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to slide ${i+1}" data-i="${i}"></button>
    `).join("");

    dots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        projIndex = Number(d.getAttribute("data-i"));
        goToProject(projIndex);
        restartAuto();
      });
    });
  }

  goToProject(0);
}

function goToProject(i){
  if (!track) return;

  const card = track.querySelector(".projectCard");
  if (!card) return;

  const isMobile = window.matchMedia("(max-width: 1020px)").matches;

  const cardWidth = card.getBoundingClientRect().width;
  const gap = 16;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(projIndex * (cardWidth + gap));
  track.style.transform = `translateX(${x}px)`;

  if (dots){
    const all = [...dots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === projIndex));
  }
}

function nextProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex >= maxIndex) ? 0 : projIndex + 1;
  goToProject(projIndex);
}
function prevProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex <= 0) ? maxIndex : projIndex - 1;
  goToProject(projIndex);
}

function restartAuto(){
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(nextProject, 3800);
}

document.getElementById("projNext")?.addEventListener("click", () => { nextProject(); restartAuto(); });
document.getElementById("projPrev")?.addEventListener("click", () => { prevProject(); restartAuto(); });
window.addEventListener("resize", () => goToProject(projIndex));

renderProjects();
restartAuto();

// =====================
// Certificates section (6 cards + rail slider)
// =====================
function renderCertificates(){
  const grid = document.getElementById("certGrid");
  const rail = document.getElementById("certTrack");
  if (grid){
    grid.innerHTML = CERTIFICATES.map(c => `
      <div class="certCard tilt-sm">
        <div class="certThumb"><img src="${safeText(c.img,"")}" alt="${escapeHtml(c.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(c.title)}</div>
          <div class="certSub">${escapeHtml(c.subtitle || "")}</div>
          <div class="certActions">
            ${c.link1?.url ? `<a class="btn" href="${safeUrl(c.link1.url)}" target="_blank" rel="noopener">${escapeHtml(c.link1.label || "View")}</a>` : ""}
            ${c.link2?.url ? `<a class="btn ghost" href="${safeUrl(c.link2.url)}" target="_blank" rel="noopener">${escapeHtml(c.link2.label || "Verify")}</a>` : ""}
          </div>
        </div>
      </div>
    `).join("");
  }
  if (rail){
    rail.innerHTML = CERT_SLIDES.map(s => `
      <div class="certSlide">
        <div class="certThumb"><img src="${safeText(s.img,"")}" alt="${escapeHtml(s.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(s.title)}</div>
          <div class="certSub">${escapeHtml(s.subtitle || "")}</div>
          <div class="p" style="margin-top:10px">${escapeHtml(s.desc || "")}</div>
        </div>
      </div>
    `).join("");
  }
}
renderCertificates();

// =====================
// Recommendations section
// =====================
function renderRecommendations(){
  const grid = document.getElementById("recGrid");
  if (!grid) return;
  grid.innerHTML = RECOMMENDATIONS.map(r => `
    <div class="recCard tilt-sm">
      <div class="recImg"><img src="${safeText(r.img,"")}" alt="${escapeHtml(r.title)}"/></div>
      <div class="recBody">
        <div class="recTitle">${escapeHtml(r.title)}</div>
        <div class="recText">${escapeHtml(r.text || "")}</div>
        <div class="recFrom">— ${escapeHtml(r.from || "")} • ${escapeHtml(r.source || "")}</div>
      </div>
    </div>
  `).join("");
}
renderRecommendations();

// =====================
// Media slider (NEW)
// =====================
const mediaTrack = document.getElementById("mediaTrack");
const mediaDots = document.getElementById("mediaDots");
let mediaIndex = 0;
let mediaTimer = null;

function renderMediaSlider(){
  if (!mediaTrack) return;

  mediaTrack.innerHTML = MEDIA_SLIDES.map(s => `
    <div class="mediaSlide">
      <img class="msImg" src="${escapeHtml(s.img)}" alt="${escapeHtml(s.title)}" onerror="this.closest('.mediaSlide').style.display='none'">
      <div class="msBody">
        <div class="msTitle">${escapeHtml(s.title)}</div>
        <div class="msSub">${escapeHtml(s.subtitle)}</div>
        <div class="msDesc">${escapeHtml(s.desc)}</div>
      </div>
    </div>
  `).join("");

  if (mediaDots){
    mediaDots.innerHTML = MEDIA_SLIDES.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to media ${i+1}" data-i="${i}"></button>
    `).join("");

    mediaDots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        mediaIndex = Number(d.getAttribute("data-i"));
        goToMedia(mediaIndex);
        restartMediaAuto();
      });
    });
  }

  goToMedia(0);
}

function goToMedia(i){
  if (!mediaTrack) return;
  const slide = mediaTrack.querySelector(".mediaSlide");
  if (!slide) return;

  const slideWidth = slide.getBoundingClientRect().width;
  const gap = 16;

  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(mediaIndex * (slideWidth + gap));
  mediaTrack.style.transform = `translateX(${x}px)`;

  if (mediaDots){
    const all = [...mediaDots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === mediaIndex));
  }
}
function nextMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex >= maxIndex) ? 0 : mediaIndex + 1;
  goToMedia(mediaIndex);
}
function prevMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex <= 0) ? maxIndex : mediaIndex - 1;
  goToMedia(mediaIndex);
}
function restartMediaAuto(){
  if (mediaTimer) clearInterval(mediaTimer);
  mediaTimer = setInterval(nextMedia, 3600);
}
document.getElementById("mediaNext")?.addEventListener("click", () => { nextMedia(); restartMediaAuto(); });
document.getElementById("mediaPrev")?.addEventListener("click", () => { prevMedia(); restartMediaAuto(); });
window.addEventListener("resize", () => goToMedia(mediaIndex));

renderMediaSlider();
restartMediaAuto();

// =====================
// Video glimpse (NEW)
// =====================
const v = document.getElementById("glimpseVideo");
if (v){
  const src = safeText(VIDEO.src, "");
  if (src && !src.startsWith("ADD_")){
    v.innerHTML = `<source src="${escapeHtml(src)}" type="video/mp4">`;
  }
  // autoplay might be blocked if not muted (we keep muted in HTML)
  v.muted = true;
  v.autoplay = true;
  v.loop = true;
}

// =====================
// 2-button list renderer (with optional 2 images)
// =====================
function renderTwoBtnList(elId, arr){
  const el = document.getElementById(elId);
  if (!el) return;

  el.innerHTML = arr.map(item => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(item.title)}</div>
      ${item.subtitle ? `<div class="itemSub">${escapeHtml(item.subtitle)}</div>` : ""}
      <div class="itemMeta">${escapeHtml(item.meta || "")}</div>
      <div class="itemDesc">${escapeHtml(item.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(item.img1 || "")}" alt="image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(item.img2 || "")}" alt="image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(item.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1?.label || "View")}</a>
        <a class="linkBtn" href="${safeUrl(item.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2?.label || "External")}</a>
      </div>

      ${item.embedHtml ? `<div class="muted" style="margin-top:12px">Embedded content below:</div><div style="margin-top:10px">${item.embedHtml}</div>` : ""}
    </div>
  `).join("");
}

renderTwoBtnList("pubList", PUBLICATIONS);
renderTwoBtnList("patentList", PATENTS);
renderTwoBtnList("chapterList", BOOK_CHAPTERS);
renderTwoBtnList("editedBookList", EDITED_BOOKS);
renderTwoBtnList("liGrid", LINKEDIN_POSTS);

// =====================
// Blogs render (local + optional external RSS)
// =====================
const blogGrid = document.getElementById("blogGrid");

function renderBlogs(posts){
  if (!blogGrid) return;
  blogGrid.innerHTML = posts.map(p => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(p.title)}</div>
      <div class="itemSub">${escapeHtml(p.subtitle || "")}</div>
      <div class="itemDesc">${escapeHtml(p.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(p.img1 || "")}" alt="blog image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(p.img2 || "")}" alt="blog image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(p.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn1?.label || "Read")}</a>
        <a class="linkBtn" href="${safeUrl(p.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn2?.label || "External")}</a>
      </div>
    </div>
  `).join("");
}

async function fetchExternalBlogs(){
  const external = [];
  for (const f of BLOG_FEEDS){
    try{
      const res = await fetch(f.rss2json);
      const data = await res.json();
      const items = (data.items || []).slice(0, 4);
      items.forEach(it => {
        external.push({
          title: it.title || `Blog from ${f.label}`,
          subtitle: f.label,
          desc: (it.description || "").replace(/<[^>]*>?/gm, "").slice(0, 360) + "...",
          img1: it.thumbnail || "assets/blog/placeholder.jpg",
          img2: "assets/blog/placeholder2.jpg",
          btn1: { label: "Read Blog", url: it.link || "#" },
          btn2: { label: "More", url: it.guid || it.link || "#" }
        });
      });
    }catch(e){
      // ignore feed errors
    }
  }
  return external;
}

(async function initBlogs(){
  const external = await fetchExternalBlogs();
  const all = [...BLOG_POSTS, ...external];
  renderBlogs(all);
})();

// =====================
// Achievements render (BIG)
// =====================
// =====================
// Achievements (BIG) — passport proof image + left/right
// =====================
const achGrid = document.getElementById("achGrid");
if (achGrid){
  // Normalize proof images (supports old img1/img2, and also new "proofs" array)
  const normalized = ACHIEVEMENTS.map(a => ({
    ...a,
    proofs: Array.isArray(a.proofs) ? a.proofs : [a.img1, a.img2].filter(Boolean)
  }));

  achGrid.innerHTML = normalized.map((a, idx) => `
    <div class="awardCard tilt">
      <div class="awardIn">
        <div class="awHead">
          <div class="awIcon">${escapeHtml(a.icon || "🏆")}</div>
          <div>
            <div class="awTitle">${escapeHtml(a.title)}</div>
            <div class="awMeta muted">${escapeHtml(a.meta || "")}</div>
            <div class="awSub">${escapeHtml(a.sub || "")}</div>
          </div>
        </div>

        <div class="p" style="margin-top:12px">${escapeHtml(a.desc || "")}</div>

        <!-- Proof image (passport size) + nav buttons -->
        <div class="proofRow" data-ach="${idx}">
          <button class="proofNavBtn" data-proof="prev" aria-label="Previous proof">‹</button>
          <div class="proofFrame">
            <img class="proofImg" src="${safeText(a.proofs[0] || "", "")}" alt="Proof image"/>
          </div>
          <button class="proofNavBtn" data-proof="next" aria-label="Next proof">›</button>
          <div class="muted" style="font-size:12px;margin-left:auto">Proof</div>
        </div>

        <div class="btnRow" style="margin-top:14px">
          ${a.btn1?.url ? `<a class="btn" href="${safeUrl(a.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn1.label || "Link 1")}</a>` : ""}
          ${a.btn2?.url ? `<a class="btn ghost" href="${safeUrl(a.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn2.label || "Link 2")}</a>` : ""}
        </div>

        <div class="proofHint">Tip: Add more proofs by using <b>proofs: [ ... ]</b> in script.js</div>
      </div>
    </div>
  `).join("");

  // proof navigation state
  const state = new Map();
  const setImg = (row, dir) => {
    const idx = Number(row.dataset.ach);
    const proofs = normalized[idx].proofs || [];
    if (!proofs.length) return;
    const cur = state.get(idx) ?? 0;
    const next = (cur + dir + proofs.length) % proofs.length;
    state.set(idx, next);
    row.querySelector(".proofImg").src = safeText(proofs[next], "");
  };

  achGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-proof]");
    if (!btn) return;
    const row = e.target.closest(".proofRow");
    if (!row) return;
    setImg(row, btn.dataset.proof === "next" ? 1 : -1);
  });
}


// =====================
// Contact card
// =====================
// =====================
// Contact (card left + form right) + MAP + QR
// =====================
const contactCard = document.getElementById("contactCard");
if (contactCard){
  const mapSrc = safeText(PROFILE.mapEmbedUrl, "");
  const hasMap = mapSrc && !mapSrc.includes("ADD_GOOGLE_MAP");
  const hasQr = PROFILE.contactQrImg && !PROFILE.contactQrImg.includes("ADD_");

  contactCard.innerHTML = `
    <h3>Quick Info</h3>
    <div class="muted" style="margin-top:8px">I reply fastest on email / LinkedIn.</div>

    <div style="margin-top:16px; display:flex; flex-direction:column; gap:14px">
      <div><b>📍 Location</b><div class="muted">${escapeHtml(PROFILE.location)}</div></div>
      <div><b>✉️ Email</b><div class="muted">${escapeHtml(PROFILE.email)}</div></div>
      <div><b>📞 Phone</b><div class="muted">${escapeHtml(PROFILE.phone)}</div></div>
    </div>

    <!-- CONTACT MAP / QR (customizable)
         1) Map: paste the iframe SRC (only src) into PROFILE.mapEmbedUrl
         2) QR: change PROFILE.contactQrImg -->
    <div class="contactExtras">
      <div class="mapFrame">
        ${hasMap ? `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapSrc}" aria-label="Google map"></iframe>` : `<div style="height:100%;display:grid;place-items:center" class="muted">Add map embed URL in <b>script.js</b></div>`}
      </div>
      <div class="qrFrame" id="contactQr">
        ${hasQr ? `<img src="${safeText(PROFILE.contactQrImg,"")}" alt="Contact QR"/>` : `<div class="muted">Add QR image in <b>script.js</b></div>`}
      </div>
    </div>
  `;
}

// Footer QR
const footerQr = document.getElementById("footerQr");
if (footerQr){
  const ok = PROFILE.footerQrImg && !PROFILE.footerQrImg.includes("ADD_");
  footerQr.innerHTML = ok ? `<img src="${safeText(PROFILE.footerQrImg,"")}" alt="Footer QR"/>` : `<div class="muted" style="padding:10px;text-align:center">Add footer QR in <b>script.js</b></div>`;
}


// =====================
// Footer links (auto copy from navbar so both stay in sync)
// =====================
const footerLinks = document.getElementById("footerLinks");
if (footerLinks){
  const navLinks = document.querySelectorAll("#navLinks a");
  footerLinks.innerHTML = Array.from(navLinks).map(a => {
    const href = a.getAttribute("href");
    const label = a.textContent.trim();
    const token = a.getAttribute("data-i18n");
    return `<a href="${href}" ${token ? `data-i18n="${token}"` : ""}>${escapeHtml(label)}</a>`;
  }).join("");

  // Apply translation to new footer links too
  applyLanguage(localStorage.getItem("lang") || "en");
}

// =====================
// Footer socials
// =====================
const socialRow = document.getElementById("socialRow");
if (socialRow){
  socialRow.innerHTML = `
    <a class="social" href="${safeUrl(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="social" href="${safeUrl(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
    <a class="social" href="${safeUrl(PROFILE.scholar)}" target="_blank" rel="noopener">Scholar</a>
    <a class="social" href="${safeUrl(PROFILE.resumeUrl)}" target="_blank" rel="noopener">Resume</a>
  `;
}

// =====================
// Schedule meeting (demo)
// =====================
document.getElementById("meetBtn")?.addEventListener("click", () => {
  const name = document.getElementById("meetName")?.value || "";
  const email = document.getElementById("meetEmail")?.value || "";
  const when = document.getElementById("meetWhen")?.value || "";
  const topic = document.getElementById("meetTopic")?.value || "";
  alert(`Demo request sent!\n\nName: ${name}\nEmail: ${email}\nWhen: ${when}\nTopic: ${topic}\n\n(Connect Calendly/Backend later)`);
});

// =====================
// Optional: simple tilt
// =====================
function attachTilt(el, intensity = 12) {
  let rect = null;
  const onMove = (e) => {
    rect = rect || el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * intensity;
    const rotX = (0.5 - y) * intensity;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };
  const onLeave = () => {
    rect = null;
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
}
document.querySelectorAll(".tilt").forEach((el) => attachTilt(el, 14));
document.querySelectorAll(".tilt-sm").forEach((el) => attachTilt(el, 10));
document.querySelectorAll(".card3d").forEach((el) => attachTilt(el, 16));

// =====================
// Navbar Search (NEW)
// - keyword type => suggestions
// - click => scroll to best match section
// =====================
const SEARCH_INDEX = [
  { id:"home", title:"Home", keywords:["hero","summary","profile","stats","banner"] },
  { id:"about", title:"About", keywords:["about","who i am","focus","tools"] },
  { id:"skills", title:"Skills", keywords:["skills","technical","stack","python","mern","react","node","docker"] },
  { id:"experience", title:"Experience", keywords:["experience","intern","geu","visit uttarakhand","work"] },
  { id:"education", title:"Education", keywords:["education","iit patna","geu","btech","mtech"] },
  { id:"projects", title:"Projects", keywords:["projects","github","live","deployed"] },
  { id:"media", title:"Media", keywords:["media","gallery","slider","photos"] },
  { id:"glimpse", title:"Video Glimpse", keywords:["video","glimpse","demo","showreel"] },
  { id:"blogs", title:"Blogs", keywords:["blog","articles","posts","medium","rss"] },
  { id:"linkedin", title:"LinkedIn Posts", keywords:["linkedin","posts","updates"] },
  { id:"publications", title:"Publications", keywords:["publication","paper","research","crc press"] },
  { id:"patents", title:"Patents", keywords:["patent","ipr","published"] },
  { id:"bookchapter", title:"Book Chapter", keywords:["book chapter","chapter"] },
  { id:"editedbook", title:"Edited Book", keywords:["edited book","editor"] },
  { id:"achievements", title:"Recognition", keywords:["achievement","award","recognition","speaker","reviewer","hackathon"] },
  { id:"contact", title:"Contact", keywords:["contact","email","phone","message"] },
];

const siteSearch = document.getElementById("siteSearch");
const searchDrop = document.getElementById("searchDrop");

function scoreMatch(q, item){
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  let s = 0;
  if (item.title.toLowerCase().includes(query)) s += 10;
  item.keywords.forEach(k => {
    const kk = k.toLowerCase();
    if (kk.includes(query) || query.includes(kk)) s += 5;
  });
  return s;
}
function openDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "block";
  searchDrop.setAttribute("aria-hidden","false");
}
function closeDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "none";
  searchDrop.setAttribute("aria-hidden","true");
}
function scrollToSection(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
  closeDrop();
  if (siteSearch) siteSearch.blur();
}

siteSearch?.addEventListener("input", () => {
  const q = siteSearch.value || "";
  const query = q.trim();
  if (!query){
    closeDrop();
    if (searchDrop) searchDrop.innerHTML = "";
    return;
  }

  const results = SEARCH_INDEX
    .map(it => ({...it, score: scoreMatch(query, it)}))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, 6);

  if (!results.length){
    if (searchDrop){
      searchDrop.innerHTML = `<div class="searchItem"><div class="siTitle">No match</div><div class="siHint">Try: projects, patents, blogs, contact...</div></div>`;
      openDrop();
    }
    return;
  }

  if (searchDrop){
    searchDrop.innerHTML = results.map(r => `
      <div class="searchItem" data-id="${escapeHtml(r.id)}">
        <div class="siTitle">${escapeHtml(r.title)}</div>
        <div class="siHint">Jump to #${escapeHtml(r.id)}</div>
      </div>
    `).join("");
    openDrop();

    searchDrop.querySelectorAll(".searchItem").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        if (id) scrollToSection(id);
      });
    });
  }
});

siteSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    const q = (siteSearch.value || "").trim();
    if (!q) return;
    // best match
    const best = SEARCH_INDEX
      .map(it => ({...it, score: scoreMatch(q, it)}))
      .sort((a,b) => b.score - a.score)[0];
    if (best && best.score > 0) scrollToSection(best.id);
  }
  if (e.key === "Escape"){
    closeDrop();
    siteSearch.blur();
  }
});

document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t) return;
  const inside = t.closest?.(".navSearch");
  if (!inside) closeDrop();
});


// =====================
// LOADER control (2.5s)
// =====================
const pageLoader = document.getElementById("pageLoader");
if (pageLoader){
  // Hide after 2.5s (as you requested). You can change this number anytime.
  const HIDE_AFTER_MS = 2500;
  setTimeout(() => pageLoader.classList.add("hide"), HIDE_AFTER_MS);

  // Also hide quickly after full load (whichever happens later is fine).
  window.addEventListener("load", () => {
    setTimeout(() => pageLoader.classList.add("hide"), 200);
  });
}
