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
    desc: "Transmission",
    port: 9091,
    icon: "fa-solid fa-file-arrow-down",
  },
  {
    desc: "NZBGet",
    port: 6789,
    icon: "fa-solid fa-newspaper",
  },
  {
    desc: "Ombi",
    port: 3579,
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    desc: "Sonarr",
    port: 8989,
    icon: "fa-solid fa-solar-panel",
  },
  {
    desc: "Radarr",
    port: 7878,
    icon: "fa-solid fa-satellite-dish",
  },
  {
    desc: "Hydra 2",
    port: 5076,
    icon: "fa-solid fa-dragon",
  },
  {
    desc: "Jackett",
    port: 9117,
    icon: "fa-solid fa-shirt",
  },
  {
    desc: "Tautulli",
    port: 8181,
    icon: "fa-solid fa-chart-simple",
  },
];
