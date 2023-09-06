import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const RenderMessage = (message, index, showMessageContainer) => {
  if (message.content === "") {
    return null;
  }
  const isUser = message.type === "user";
  const iconName = isUser ? "user" : "android";
  const messageContainerStyle = isUser
    ? styles.userMessageContainer
    : styles.botMessageContainer;
  const messageTextStyle = isUser
    ? styles.userMessageText
    : styles.botMessageText;

  return (
    <View key={index} style={messageContainerStyle}>
      <Icon name={iconName} size={24} color="#fff" style={styles.messageIcon} />
      <Text style={messageTextStyle}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessageText: {
    fontSize: 18,
    margin: 10,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 10,
    width: "100%",
    // minHeight: Dimensions.get("window").height / 8,
    minHeight: 30,
  },
  botMessageText: {
    fontSize: 18,
    margin: 10,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 10,
    width: "100%",
    // minHeight: Dimensions.get("window").height / 8,
    minHeight: 30,
  },
  botMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Change from center to flex-start
    backgroundColor: "rgba(94, 23, 235, 0.7)",
    alignSelf: "stretch",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    marginVertical: 5,
    minHeight: 40,
  },

  userMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Change from center to flex-start
    backgroundColor: "black",
    alignSelf: "stretch",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    marginVertical: 5,
    minHeight: 40,
  },
  messageContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageIcon: {
    position: "absolute",
    top: 3,
    left: -5,
    paddingTop: 25, // Add some padding to give the icon some space from the top
    paddingLeft: 23, // Add some padding to give the icon some space from the left
  },
});
