import { Link } from 'expo-router'
import { Text, View, StatusBar } from "react-native";

const Index = () => {
  return (
    
    <View className='flex-1 items-center justify-center gap-y-4'>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text className='text-4xl underline font-rubik-extrabold'>Welcome to GTP!👋</Text>
    </View>
  )
}

export default Index
