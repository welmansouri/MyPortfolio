// icons.map.ts
export type TechIcon = { set: 'fa-brands'|'fa-solid'|'fa-regular'; icon: string };

export const TECH_ICON_MAP: Record<string, TechIcon> = {
  // Programmation
  'Java':        { set: 'fa-brands',  icon: 'fa-java' },
  'PHP':         { set: 'fa-brands',  icon: 'fa-php' },
  'JavaScript':  { set: 'fa-brands',  icon: 'fa-js' },
  'TypeScript':  { set: 'fa-solid',   icon: 'fa-code' },     // pas d’icône TS officielle en FA
  'SQL':         { set: 'fa-solid',   icon: 'fa-database' },

  // Front-end & Mobile
  'Angular':     { set: 'fa-brands',  icon: 'fa-angular' },
  'React':       { set: 'fa-brands',  icon: 'fa-react' },
  'Vue.js':      { set: 'fa-brands',  icon: 'fa-vuejs' },
  'React Native':{ set: 'fa-brands',  icon: 'fa-react' },     // on réutilise React
  'Next.js':     { set: 'fa-solid',   icon: 'fa-arrow-right' }, // fallback
  'Redux':       { set: 'fa-brands',  icon: 'fa-redux' },
  'Tailwind':    { set: 'fa-solid',   icon: 'fa-wind' },      // fallback
  'Vuetify':     { set: 'fa-solid',   icon: 'fa-gem' },       // fallback

  // Back-end & DB
  'Spring Boot':     { set: 'fa-solid', icon: 'fa-leaf' },       // fallback
  'Spring Security': { set: 'fa-solid', icon: 'fa-shield-halved' },
  'Hibernate':       { set: 'fa-solid', icon: 'fa-database' },
  'JPA':             { set: 'fa-solid', icon: 'fa-database' },
  'Microservices':   { set: 'fa-solid', icon: 'fa-diagram-project' },
  'API REST':        { set: 'fa-solid', icon: 'fa-code' },
  'Node.js':         { set: 'fa-brands',icon: 'fa-node' },
  'PostgreSQL':      { set: 'fa-solid', icon: 'fa-database' },   // fallback
  'MySQL':           { set: 'fa-solid', icon: 'fa-database' },   // fallback
  'MongoDB':         { set: 'fa-solid', icon: 'fa-database' },   // fallback
  'Supabase':        { set: 'fa-solid', icon: 'fa-database' },   // fallback

  'Docker':      { set: 'fa-brands',  icon: 'fa-docker' },
  'Kubernetes':  { set: 'fa-solid',   icon: 'fa-cubes-stacked' }, // fallback
  'Jenkins':     { set: 'fa-solid',   icon: 'fa-gears' },         // fallback
  'GitLab CI':   { set: 'fa-brands',  icon: 'fa-gitlab' },
  'SonarQube':   { set: 'fa-solid',   icon: 'fa-wave-square' },   // fallback
  'Maven':       { set: 'fa-solid',   icon: 'fa-gears' },         // fallback
  'Gradle':      { set: 'fa-solid',   icon: 'fa-gears' },         // fallback
  'Azure':       { set: 'fa-brands',  icon: 'fa-microsoft' },     // approx
  'JUnit':       { set: 'fa-solid',   icon: 'fa-vial' },          // fallback
  'JaCoCo':      { set: 'fa-solid',   icon: 'fa-vial' },          // fallback
  'TDD':         { set: 'fa-solid',   icon: 'fa-vial' },          // fallback
  'Clean Code':  { set: 'fa-solid',   icon: 'fa-broom' },         // fallback
  'Jira (Agile/Scrum)': { set: 'fa-brands', icon: 'fa-atlassian' },
  'Postman':     { set: 'fa-solid',   icon: 'fa-envelope' },      // fallback
  'ELK':         { set: 'fa-solid',   icon: 'fa-chart-line' },    // fallback
  'Power BI':    { set: 'fa-solid',   icon: 'fa-chart-bar' }      // fallback
};

export function getIcon(tech: string): TechIcon {
  return TECH_ICON_MAP[tech] ?? { set: 'fa-solid', icon: 'fa-puzzle-piece' };
}
