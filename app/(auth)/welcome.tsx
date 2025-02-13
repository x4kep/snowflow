import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between">
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

export default Welcome;
