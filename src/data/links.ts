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
    port: 80,
    icon: "fa-solid fa-play",
  },
  {
    desc: "Bazarr",
    port: 80,
    icon: "fa-solid fa-closed-captioning",
  },
  {
    desc: "Profilarr",
    port: 80,
    icon: "fa-solid fa-ranking-star",
  },
  {
    desc: "DownloadStation",
    port: 80,
    icon: "fa-solid fa-file-arrow-down",
  },
  {
    desc: "SABnzbd",
    port: 80,
    icon: "fa-solid fa-newspaper",
  },
  {
    desc: "Overseerr",
    port: 80,
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    desc: "Sonarr",
    port: 80,
    icon: "fa-solid fa-solar-panel",
  },
  {
    desc: "Radarr",
    port: 80,
    icon: "fa-solid fa-satellite-dish",
  },
  {
    desc: "Prowlarr",
    port: 80,
    icon: "fa-solid fa-cat",
  },
//  {
//    desc: "Jackett",
//    port: 9117,
//    icon: "fa-solid fa-shirt",
//  },
  {
    desc: "Tautulli",
    port: 80,
    icon: "fa-solid fa-chart-simple",
  },
];
