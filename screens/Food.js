import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Food({ route, navigation }) {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.strMeal}`
        );
        const data = await res.json();

        setMeal(data.meals);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getMeal();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        title={
          route.params.strMeal.length > 16
            ? `${route.params.strMeal.substring(0, 16)}...`
            : route.params.strMeal
        }
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        className="p-4"
      >
        <View>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            meal.map((m) => (
              <View key={m.idMeal} className="mb-12">
                <Image
                  source={{ uri: m.strMealThumb }}
                  className="w-full h-52 rounded-lg"
                />
                <View className="mt-6 flex-row items-center justify-start">
                  <Text className="bg-slate-200 px-3 py-2 rounded-full text-slate-800 mr-2">
                    {m.strCategory}
                  </Text>
                  <Text className="bg-slate-200 px-3 py-2 rounded-full text-slate-800">
                    {m.strArea}
                  </Text>
                </View>
                <Text className="my-6 text-2xl font-bold text-slate-800">
                  {m.strMeal}
                </Text>

                <View>
                  <Text className="font-bold text-slate-800 text-lg mb-2">
                    Ingredients
                  </Text>

                  {m.strIngredient1 && m.strMeasure1 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure1} {m.strIngredient1}
                    </Text>
                  )}
                  {m.strIngredient2 && m.strMeasure2 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure2} {m.strIngredient2}
                    </Text>
                  )}
                  {m.strIngredient3 && m.strMeasure3 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure3} {m.strIngredient3}
                    </Text>
                  )}
                  {m.strIngredient4 && m.strMeasure4 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure4} {m.strIngredient4}
                    </Text>
                  )}
                  {m.strIngredient5 && m.strMeasure5 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure5} {m.strIngredient5}
                    </Text>
                  )}
                  {m.strIngredient6 && m.strMeasure6 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure6} {m.strIngredient6}
                    </Text>
                  )}
                  {m.strIngredient7 && m.strMeasure7 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure7} {m.strIngredient7}
                    </Text>
                  )}
                  {m.strIngredient8 && m.strMeasure8 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure8} {m.strIngredient8}
                    </Text>
                  )}
                  {m.strIngredient9 && m.strMeasure9 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure9} {m.strIngredient9}
                    </Text>
                  )}
                  {m.strIngredient10 && m.strMeasure10 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure10} {m.strIngredient10}
                    </Text>
                  )}
                  {m.strIngredient11 && m.strMeasure11 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure11} {m.strIngredient11}
                    </Text>
                  )}
                  {m.strIngredient12 && m.strMeasure12 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure12} {m.strIngredient12}
                    </Text>
                  )}
                  {m.strIngredient13 && m.strMeasure13 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure13} {m.strIngredient13}
                    </Text>
                  )}
                  {m.strIngredient14 && m.strMeasure14 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure14} {m.strIngredient14}
                    </Text>
                  )}
                  {m.strIngredient15 && m.strMeasure15 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure15} {m.strIngredient15}
                    </Text>
                  )}
                  {m.strIngredient16 && m.strMeasure16 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure16} {m.strIngredient16}
                    </Text>
                  )}
                  {m.strIngredient17 && m.strMeasure17 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure17} {m.strIngredient17}
                    </Text>
                  )}
                  {m.strIngredient18 && m.strMeasure18 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure18} {m.strIngredient18}
                    </Text>
                  )}
                  {m.strIngredient19 && m.strMeasure19 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure19} {m.strIngredient19}
                    </Text>
                  )}
                  {m.strIngredient20 && m.strMeasure20 && (
                    <Text className="text-slate-600 text-sm leading-6">
                      {m.strMeasure20} {m.strIngredient20}
                    </Text>
                  )}
                </View>

                <View>
                  <Text className="text-lg text-slate-800 mt-4 mb-2 font-bold">
                    How to make
                  </Text>
                  <Text className="text-slate-600 text-sm leading-6">
                    {m.strInstructions}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
