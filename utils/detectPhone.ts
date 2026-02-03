type UAData = {
  mobile?: boolean;
};

type NavigatorWithUAData = Navigator & {
  userAgentData?: UAData;
};

export const detectPhone = (): boolean => {
  if (typeof navigator === "undefined") return false;

  const nav = navigator as NavigatorWithUAData;

  if (typeof nav.userAgentData?.mobile === "boolean") {
    return nav.userAgentData.mobile;
  }

  const ua = navigator.userAgent.toLowerCase();

  return /android|iphone|ipod|ipad|iemobile|windows phone|blackberry|opera mini|mobile|tablet/.test(
    ua,
  );
};
