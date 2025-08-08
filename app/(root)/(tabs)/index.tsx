import { Link } from 'expo-router'
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View className='flex-1 items-center justify-center gap-y-4'>
      <Text className='text-4xl underline font-rubik-extrabold'>Welcome to GTP!👋</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
