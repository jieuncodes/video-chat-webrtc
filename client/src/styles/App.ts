import tw from "tailwind-styled-components";

export const AppContainer = tw.div`flex w-screen h-screen bg-atlas bg-cover align-middle justify-center items-center`;

export const MainContainer = tw.div`box-border w-[1600px] h-[750px] bg-black/60 rounded-2xl border-1 border-white/20 grid grid-cols-[100px_9fr_auto]`;

export const SubTitle = tw.h1`text-2xl text-white font-bold mb-6`;
export const UnderLineInputBox = tw.div`flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 text-white`;
