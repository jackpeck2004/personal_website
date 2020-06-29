interface WindowDimensions {
    width: number,
    height: number
}

export const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const isMobile = (): boolean => {
  if(getWindowDimensions().width >= 1000) return false
  return true
}