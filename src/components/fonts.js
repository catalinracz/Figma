import { useFonts } from 'expo-font';

export const fonts = () => {
  const [loaded] = useFonts({
    "DMSans": require("../../assets/fonts/DMSans-Regular.ttf"),
    "SFPro": require("../../assets/fonts/SFPro.ttf"),
  });

  if (!loaded) {
    return null;
  };
  };

