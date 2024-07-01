import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { SearchBar } from "react-native-screens";
import Search from "../components/Search";

export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();

        setCategories(data.categories);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      const data = await res.json();

      setResults(data.meals);
      setIsLoading(false);
      setSearchText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-black p-4">
        <Text className="text-white text-center font-bold text-base">
          Food Palace
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        <Search setSearchText={setSearchText} handleSearch={handleSearch} />
        {results ? (
          <View>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              results.map((result) => (
                <TouchableOpacity
                  key={result.idMeal}
                  className="border border-slate-400 rounded-lg p-4 mb-4"
                  onPress={() => navigation.navigate("Food", result)}
                >
                  <Image
                    source={{ uri: result.strMealThumb }}
                    className="w-full h-44"
                  />
                  <Text className="text-slate-800 font-bold text-xl">
                    {result.strMeal}
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        ) : (
          <View>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              categories.map((category) => (
                <TouchableOpacity
                  key={category.idCategory}
                  className="border border-slate-400 rounded-lg p-4 mb-4"
                  onPress={() => navigation.navigate("Foods", category)}
                >
                  <Image
                    source={{ uri: category.strCategoryThumb }}
                    className="w-full h-44"
                  />
                  <Text className="font-bold text-slate-800 text-2xl my-2">
                    {category.strCategory}
                  </Text>
                  <Text className="text-slate-600 text-sm leading-6">
                    {`${category.strCategoryDescription.substring(0, 100)}...`}
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
