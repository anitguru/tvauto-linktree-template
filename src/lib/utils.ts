// src/lib/utils.ts

/**
 * Convert an IPv4 string from dots to dashes.
 * e.g. "10.0.0.187" -> "10-0-0-187"
 */
export function ipToDash(ip: string) {
  return ip.replace(/\./g, "-");
}
