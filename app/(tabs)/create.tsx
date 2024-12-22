import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFiled from '~/components/form-filed'
import { icons } from '~/constants'
import { useVideoPlayer, VideoView } from 'expo-video';
import CustomButton from '~/components/custom-button'
import * as DocumentPicker from 'expo-document-picker';
const Create = () => {
  const [form, setForm] = useState(
    {
      title: '',
      video: null,
      thumbnail: null,
      prompt: ''
    }
  )

  // for knowing wheather uploading video or not
  const [uploading, setUploading] = useState(false)
  const player = useVideoPlayer(form.video, (player) => {
    player.loop = true;
    player.play();
  });

  const picker = async () => {
 const result =  await DocumentPicker.getDocumentAsync()
 console.log("reutl" ,result);
 
  } 
  
//  console.log("picker" ,picker());
  
  return (
    //  {/* if you build the screen build like this safeArea for saving the screen and color , scrollview for scrolling(if need nested flatlist then don't use scrollview) from top to bottom 
    // then view for the screen content 
    // */}
    <SafeAreaView className='  flex-1 bg-primary'>

      <ScrollView>
        {/* How to make this ? 
    // it's for so store everything in usestate
    */}
        <View className='   h-full  px-4 my-6'>
          <Text className=' text-2xl text-white font-psemibold'>Upload Video</Text>

          <FormFiled
            title="Video Title"
            placeholder='Give your video a catchy title...'
            value={form.title}
            handleChangeText={(e) => setForm({ ...form, e: form.title })}
            otherStyles='mt-10'
          />

          {/* for video link */}
          <View className=' mt-7 space-y-2'>
            <Text className="text-base text-gray-100 font-pmedium">
              Upload Video
            </Text>
            {/* <TouchableOpacity onPress={() => openPicker("video")}> */}
            <TouchableOpacity onPress={() => picker()}>
              {form.video ? (
                <VideoView
                  player={player}
                  style={{ width: '100%', height: 264, borderRadius: 16 }}
                // resizeMode={ResizeMode.COVER}
                />
              ) : (
                <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                  <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
                    <Image
                      source={icons.upload}
                      resizeMode="contain"
                      alt="upload"
                      className="w-1/2 h-1/2"
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100 font-pmedium">
              Thumbnail Image
            </Text>

            {/* <TouchableOpacity onPress={() => openPicker("image")}> */}
            <TouchableOpacity >
              {form.thumbnail ? (
                <Image
                  source={{ uri: form.thumbnail.uri }}
                  resizeMode="cover"
                  className="w-full h-64 rounded-2xl"
                />
              ) : (
                <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    alt="upload"
                    className="w-5 h-5"
                  />
                  <Text className="text-sm text-gray-100 font-pmedium">
                    Choose a file
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <FormFiled
            title='AI Prompt'
            placeholder='The AI prompt of your video...'
            value={form.prompt}
            handleChangeText={() => setForm({ ...form, e: form.prompt })}
            otherStyles='mt-10'


          />

          <CustomButton
            title="Publish It"
            // handlePress={submit}
            containerStyles="mt-7"
            isLoading={uploading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create

