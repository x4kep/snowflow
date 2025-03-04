import { icons } from "@/constants";
import { FlatList } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Camera() {
  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        ListHeaderComponent={
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl font-JakartaExtraBold">Camera</Text>
              <TouchableOpacity className="justify-center items-center w-10 h-10 rounded-full bg-white">
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>
          </>
        }
        data={[]}
        renderItem={() => null}
      />
    </SafeAreaView>
  );
}
