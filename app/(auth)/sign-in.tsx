import { View, Image, ScrollView, Text } from "react-native";
import { icons, images } from "@/constants";
import InputField from "../components/InputField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpTopBg} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome👋
          </Text>
        </View>
        <View className="p-5 ">
          <InputField
            label="Name"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          ></InputField>
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          ></InputField>
          <CustomButton
            title="Sign in"
            onPress={onSignInPress}
            className="mt-6"
          ></CustomButton>
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have account? </Text>
            <Text className="text-primary-500">Sign up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
