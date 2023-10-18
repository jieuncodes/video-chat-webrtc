export const makeMessage = ({
  type,
  payload,
}: {
  type: string;
  payload: string;
}) => {
  const msg = { type, payload };
  return JSON.stringify(msg);
};
