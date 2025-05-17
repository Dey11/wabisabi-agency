import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  LOGOS,
  VIP_PACKS,
  BANNERS,
  DISCORD_HEADERS,
  DISCORD_EMOTES,
} from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ServiceType = {
  type: "logo" | "banner" | "vip" | "header" | "emote";
};

export const services = ["Banner", "Logo", "VIP Packs", "Header", "Emote"];

export function getCurrentPosters(currService: ServiceType["type"]) {
  switch (currService) {
    case "banner":
      return BANNERS.map((banner) => ({
        id: banner.id,
        src: banner.image,
        title: banner.alt,
        type: "Banner",
        description: "Premium quality banner design",
      }));
    case "logo":
      return LOGOS.map((logo) => ({
        id: logo.id,
        src: logo.image,
        title: logo.alt,
        type: "Logo",
        description: "Professional logo design",
      }));
    case "vip":
      return VIP_PACKS.map((vip) => ({
        id: vip.id,
        src: vip.image,
        title: vip.alt,
        type: "VIP Pack",
        description: "Complete VIP branding package",
      }));
    case "header":
      return DISCORD_HEADERS.map((header) => ({
        id: header.id,
        src: header.image,
        title: header.alt,
        type: "Header",
        description: "Custom Discord header design",
      }));
    case "emote":
      return DISCORD_EMOTES.map((emote) => ({
        id: emote.id,
        src: emote.image,
        title: emote.alt,
        type: "Emote",
        description: "Unique Discord emote design",
      }));
    default:
      return VIP_PACKS.map((vip) => ({
        id: vip.id,
        src: vip.image,
        title: vip.alt,
        type: "VIP Pack",
        description: "Complete VIP branding package",
      }));
  }
}
