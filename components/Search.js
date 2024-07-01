import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Search({ setSearchText, handleSearch }) {
  return (
    <View className="py-4">
      <TextInput
        placeholder="e.g chicken"
        className="p-4 rounded-lg border border-slate-400 text-lg"
        onChangeText={(text) => setSearchText(text.toLowerCase())}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
}
