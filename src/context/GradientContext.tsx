import React, {createContext, useState} from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setCurrentColors: (colors: ImageColors) => void;
  setOldColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: Props) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setCurrentColors = (colores: ImageColors) => {
    setColors(colores);
  };

  const setOldColors = (colores: ImageColors) => {
    setPrevColors(colores);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setCurrentColors,
        setOldColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
