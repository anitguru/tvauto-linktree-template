// src/lib/buildLinks.ts

import { ipToDash } from "./utils";
// Import the type separately from the actual data
import type { LinkData } from "../data/links";
import { links } from "../data/links";

/**
 * The final link object that we'll hand off to the UI.
 * Replaces 'port' with the full "domain:port" in `link`.
 */
export interface FinalLink {
  desc: string;
  icon: string;
  link: string;
}

/**
 * Build an array of final links using environment variables:
 * - LOCAL_APPS_URL for general apps
 * - LOCAL_PLAYER_URL for Plex (if set, otherwise fallback)
 */
export function buildLinks(): FinalLink[] {
  // Grab .env variables
  const appsIp = import.meta.env.LOCAL_APPS_URL || "127.0.0.1";
  const playerIp = import.meta.env.LOCAL_PLAYER_URL || appsIp;

  const appsDashed = ipToDash(appsIp);
  const playerDashed = ipToDash(playerIp);

  return links.map((item: LinkData) => {
    if (item.desc === "Plex") {
      return {
        desc: item.desc,
        icon: item.icon,
        link: `${playerDashed}.nip.io:${item.port}`,
      };
    }
    return {
      desc: item.desc,
      icon: item.icon,
      link: `${appsDashed}.nip.io:${item.port}`,
    };
  });
}
