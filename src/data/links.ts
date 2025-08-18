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
//  {
//    desc: "Emby",
//    port: 8096,
//    icon: "fa-solid fa-play",
//  },
  {
    desc: "DownloadStation",
    port: 8000,
    icon: "fa-solid fa-file-arrow-down",
  },
  {
    desc: "SABnzbd",
    port: 8080,
    icon: "fa-solid fa-newspaper",
  },
  {
    desc: "Overseerr",
    port: 5055,
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    desc: "Sonarr",
    port: 8989,
    icon: "fa-solid fa-solar-panel",
  },
  {
    desc: "Radarr",
    port: 8310,
    icon: "fa-solid fa-satellite-dish",
  },
  {
    desc: "Prowler",
    port: 9696,
    icon: "fa-solid fa-cat",
  },
//  {
//    desc: "Jackett",
//    port: 9117,
//    icon: "fa-solid fa-shirt",
//  },
  {
    desc: "Tautulli",
    port: 8181,
    icon: "fa-solid fa-chart-simple",
  },
];
