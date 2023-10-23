import { Card, CardBody } from "@nextui-org/react";
import tw from "tailwind-styled-components";

export const NickNameBox = tw.div`flex flex-col items-center justify-center rounded-xl w-96 h-48 bg-black/60 gap-6`;

export const Form = tw.form`grid grid-cols-[1fr_auto] w-5/6 gap-3`;

export const AuthContainer = tw.div`flex flex-col w-full h-full items-center justify-center `;
export const AuthCard = tw(
  Card
)`max-w-full w-[340px] h-[450px] bg-black/60 text-white`;
export const AuthCardBody = tw(CardBody)`overflow-hidden`;
export const AuthForm = tw.form`flex flex-col gap-4 mt-3`;
export const AuthDesc = tw.p`text-center text-small mt-3`;
