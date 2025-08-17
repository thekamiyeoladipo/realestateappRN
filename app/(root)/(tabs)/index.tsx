import { Link } from 'expo-router'
import { Image } from 'react-native';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '@/components/Search';

const Index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">

        <View className='flex flex-row items-center justify-between mt-5'>

          <View className='flex flex-row items-center'>

            {/* Profile Image */}
            <Image source={images.avatar} className='size-12
            rounded-full'  />
            {/* Greeting & Name */}
            <View className='flex flex-col ml-3 items-start
            justify-center'>
              <Text className='text-sm font-rubik text-black-100'>
                Good Morning
                </Text>
              <Text className='font-rubik-medium
              text-black-300 text-base'>Kamiye Oladipo</Text>
            </View>

          </View>

          <Image source={icons.bell} className='size-6'  />

        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
}

export default Index
