import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, StatusBar, Alert  } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';
import { logout } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';


interface SettingsItemsProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}


const SettingsItem = ({icon, title, onPress, textStyle, showArrow = true} : SettingsItemsProps) => (
  <TouchableOpacity className='flex flex-row items-center justify-between py-3' onPress={onPress}>
    <View className='flex flex-row items-center gap-3'>
    <Image className='size-5' source={icon} />
    <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {showArrow && <Image className='size-4' source={icons.rightArrow} />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();


  const handleLogout = async () => {
     const result = await logout();
     if (result) {
      Alert.alert("Success", "You have been logged out successfully.");
      refetch();
     } else {
      Alert.alert("Error", "Failed to log out. Please try again.");
     }
  };


  return (
    <SafeAreaView>
       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-5">
          <SettingsItem icon={icons.calendar} title="My bookings" />
          <SettingsItem icon={icons.wallet} title="My wallet" />
        </View>

        <View className="flex flex-col mt-5 border-t border-primary-200 pt-5">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

         <View className="flex flex-col mt-5 border-t border-primary-200 pt-5">
          <SettingsItem icon={icons.logout} title='Logout'
          textStyle='text-danger' showArrow={false} onPress={handleLogout} />
         </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile