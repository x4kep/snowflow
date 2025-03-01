import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIi = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100"></View>
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100"></View>
      </View>
      <CustomButton
        title="Log in with google"
        className="mt-5 w-full shadow-none"
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIi}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h5 mx-2"
          ></Image>
        )}
      ></CustomButton>
    </View>
  );
};

export default OAuth;
