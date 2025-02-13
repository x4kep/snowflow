import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: true }} />
      <Stack.Screen name="sign-up" options={{ headerShown: true }} />
      <Stack.Screen name="sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default Layout;
