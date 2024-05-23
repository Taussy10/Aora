
import { ActivityIndicator, Text, TouchableOpacity , StyleSheet } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  navigation
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      // opacity when you press on the touchable
      activeOpacity={0.7}
    //   className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
    //     isLoading ? "opacity-50" : ""
    //   }`}
    style={styles.btn}
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

const styles = StyleSheet.create({
  btn:{
    width: 327,
    height: 58,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor:'#FF8C00',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 54,
  }
})
