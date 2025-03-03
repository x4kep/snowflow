import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full w-12 h-12 ${
      focused ? "bg-general-300" : ""
    }`}
  >
    <View
      className={`rounded-full w-11 h-11 items-center justify-center ${
        focused ? "bg-general-400" : ""
      }`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      //   initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "",
        tabBarInactiveTintColor: "",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 30, // ios only 0
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "Weather",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.weather} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.camera} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="information"
        options={{
          title: "Information",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.information} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="promotion"
        options={{
          title: "Promotion",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.promotion} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.setting} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
