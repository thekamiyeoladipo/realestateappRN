import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import icons from '@/constants/icons';
import { TextInput } from 'react-native-gesture-handler';
import { useGlobalSearchParams, usePathname } from 'expo-router'

const Search = () => {
   const path = usePathname();
   const params = useGlobalSearchParams<{ query?: string }>();
   const [search, setSearch] = useState(params.query);

 const handleSearch = (text: string) => {
    setSearch(text);
    // Implement search logic here
  }

  return (
    <View className='flex flex-row items-center justify-between w-full px-4
    bg-accent-100 border border-primary-100 mt-5 py-4 rounded-full'>
        <View className='flex-1 flex flex-row items-center justify-start z-50'>
            <Image className='size-5 mr-4' source={icons.search} />
            <TextInput
            value={search}
            onChangeText={handleSearch} 
            placeholder='Search Available Properties'
            className='text-sm font-rubik text-black-300'/>
        </View>
      
    </View>
  )
}

export default Search