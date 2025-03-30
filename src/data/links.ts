// src/data/links.ts
export interface LinkData {
  desc: string;
  port: number;
  icon: string;
}

export const links: LinkData[] = [
  {
    desc: "Plex",
    port: 32400,
    icon: "fa-solid fa-tv",
  },
  {
    desc: "Emby",
    port: 8096,
    icon: "fa-solid fa-play",
  },
  {
    desc: "Transmission",
    port: "/transmission",
    icon: "fa-solid fa-file-arrow-down",
  },
  {
    desc: "NZBGet",
    port: "/nzbget",
    icon: "fa-solid fa-newspaper",
  },
  {
    desc: "Ombi",
    port: "/ombi",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    desc: "Sonarr",
    port: "/sonarr",
    icon: "fa-solid fa-solar-panel",
  },
  {
    desc: "Radarr",
    port: "/radarr",
    icon: "fa-solid fa-satellite-dish",
  },
  {
    desc: "Hydra 2",
    port: "/hydra",
    icon: "fa-solid fa-dragon",
  },
  {
    desc: "Jackett",
    port: "/jackett",
    icon: "fa-solid fa-shirt",
  },
  {
    desc: "Tautulli",
    port: "/tautulli",
    icon: "fa-solid fa-chart-simple",
  },
];
