let silent = false;

export const setSilent = value => {
  silent = !!value;

  return silent;
};

export const isSilent = () => silent;
