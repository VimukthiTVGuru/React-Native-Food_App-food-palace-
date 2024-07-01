import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  return (
    <View className="bg-black p-4 flex-row items-center justify-between">
      <Entypo
        name="chevron-left"
        size={28}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <Text className="text-white text-center font-bold text-base">
        {title}
      </Text>
    </View>
  );
}
