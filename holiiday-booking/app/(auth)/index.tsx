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
        <TouchableOpacity onPress={() => router.navigate("/login")}>
          <View className="w-full h-14 bg-white rounded justify-center items-center">
            <Text className="text-black font-bold text-lg">Log in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/login")}>
          <View className="w-full h-14 bg-black rounded justify-center items-center mt-3">
            <Text className="text-white font-bold text-lg">Join now</Text>
          </View>
        </TouchableOpacity>
      </View>
   </View>
  );
};

export default Onboarding;
