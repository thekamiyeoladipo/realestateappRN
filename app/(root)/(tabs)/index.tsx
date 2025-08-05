import { Link } from 'expo-router'
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='font-bold underline text-red-600'>Welcome to Tailwind in RN!👋</Text>
      <Text className='text-5xl font-light tracking-wide'>Shey dada ni?</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
