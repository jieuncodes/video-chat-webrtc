import { Button } from "@nextui-org/react";
import tw from "tailwind-styled-components";

export const WelcomeContent = tw.div`flex flex-col items-center justify-center h-full
after:(absolute inset-0 content z-10 bg-gradient-to-r from-black/30 via-black/50 to-black)


`;

export const WelcomeTitleWhite = tw.h1` inline font-bold text-8xl bg-clip-text text-transparent bg-white ml-3`;
export const WelcomeTitleOrange = tw(
  WelcomeTitleWhite
)` from-blue-500 to-cyan-300 bg-gradient-to-b`;
export const WelcomeTitlePink = tw(
  WelcomeTitleWhite
)`from-indigo-700 to-violet-300 bg-gradient-to-b `;
export const GetStartedBtn = tw(
  Button
)`mt-20 w-96 h-16 font-bold text-2xl opacity-90`;
export const Footer = tw.div`absolute bottom-0 w-full h-16 text-white text-lg flex items-center justify-center`;
