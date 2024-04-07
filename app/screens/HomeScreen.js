import React from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      {/* <Image
        blurRadius={60}
        source={require("../assets/images/bg.jpeg")}
        className="absolute z-20 w-full h-full"
      /> */}
      <SafeAreaView className="flex flex-1">
        <View style={{height: "7%"}} className="mx-4 relative z-50">
          <View 
            className="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: theme.bgWhite(0.2)}}
          >
            <TextInput 
              placeholder="Search city" 
              placeholderTextColor={"lightgray"} 
              className="bg-gray-700"
            />
            <Text>123</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
