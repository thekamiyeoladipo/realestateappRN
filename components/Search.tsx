import { View, Text } from 'react-native'
import React, { useState } from 'react'
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
    <View>
      <Text className=''>Search init</Text>
    </View>
  )
}

export default Search