
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
    //   className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
    //     isLoading ? "opacity-50" : ""
    //   }`}
    style={{backgroundColor:'lightgreen'}}
      disabled={isLoading}
    >
      <Text 
    //   className={`text-primary font-psemibold text-lg ${textStyles}`}
    style={{fontSize: 20 , fontWeight: '600'}}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
        //   className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
