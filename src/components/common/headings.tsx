import useMediaQuery from '@/lib/hooks/useMediaQuery';
import constants from '@/lib/constants';
import { FC, PropsWithChildren } from 'react';

export const SubHeading: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h2 className="text-5xl">{children}</h2>
  );
}

export const Title: FC<PropsWithChildren<{}>> = ({ children }) => {
  const isXl = useMediaQuery(constants.mediaQueries.IS_XLARGE);
  return (
    <h1 className={`${isXl ? "text-9xl" : "text-6xl"} font-bold pt-[20vh]`}>{children}</h1>
  );
}
