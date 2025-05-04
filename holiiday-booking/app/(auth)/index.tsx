import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { useVideoPlayer, VideoView } from "expo-video";

const { width, height } = Dimensions.get("window");
const videoSource =
  "https://videos.pexels.com/video-files/3783819/3783819-sd_640_360_24fps.mp4";

const Onboarding = () => {
  const router = useRouter();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });
  return (
   <View className="flex-1 relative">
     <VideoView
        style={{ position: "absolute",height, width }}
        player={player}
        allowsFullscreen
        nativeControls={false}
        contentFit="cover"
        
      />

      <View className="absolute bottom-16 w-full px-4 ">
        <TouchableOpacity onPress={() => router.navigate("/sign-in")}>
          <View className="w-full h-14 bg-[#00d3d8] rounded justify-center items-center ">
            <Text className="text-white font-extrabold  text-xl ">Log in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/sign-in")}>
          <View className="w-full h-14 mt-3 bg-white rounded justify-center items-center ">
            <Text className="text-[#00d3d8] font-extrabold  text-xl ">Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
   </View>
  );
};

export default Onboarding;
