import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {
    // Handle Google login logic here
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        
          <Image
            source={images.onboarding}
            className="w-full h-4/6"
            resizeMode="contain"
          />
        

        <View className="px-10">
          <Text
            className="text-base text-center uppercase
          font-rubik text-black-200"
          >
            Welcome to Global Timi Properties
          </Text>
          <Text
            className="text-3xl font-rubik-bold
          text-black-300 text-center mt-2 capitalize"
          >
            Let's get you closer to{" \n"}
            <Text className="text-primary-300 capitalize">your ideal home</Text>
          </Text>

          <Text className="text-center text-lg font-rubik text-black-200 mt-12">
            Login in with Google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300
          rounded-full w-full py-4 mt-5 mb-12"
            onPress={handleLogin}
          >
            <View className="flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text
                className="text-lg font-rubik-medium
            text-black-300 ml-2"
              >
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
