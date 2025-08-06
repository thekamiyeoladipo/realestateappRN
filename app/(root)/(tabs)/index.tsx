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
      <Text className='font-bold text-5xl font-rubik  underline text-red-600'>Welcome to Tailwind in RN!👋</Text>
      <Text className='text-5xl font-bold font-rubik-light  tracking-wide'>Shey dada ni?</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
