import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "#219ebc",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  chatArea: {
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 0,
    paddingBottom: 90,
    backgroundColor: "black", // Add this line to set the background color of the ScrollView
  },
  chatAreaContent: {
    padding: 10,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  firstMessageContainer: {
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 0, // Set the marginTop to 0 for the first message
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 120,
    width: "100%",
    borderTopColor: "#B2ABAB",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    minHeight: 60, // Add this line
    color: "#fff",
  },

  button: {
    backgroundColor: "#5E17EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  chatbotResponse: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    width: "100%",
  },
  typingArea: {
    backgroundColor: "#4caf50", // Set the background color to green
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
    width: "100%",
    minHeight: 40,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#219ebc",
    color: "#fff",
  },
  messageText: {
    fontSize: 18,
    color: "#fff",
  },
  divider: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  typingIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  typingText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#219ebc", // Change the color of the typing text to match the theme
  },
  clearButton: {
    marginLeft: 5,
    marginRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 25,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#219ebc",
  },
});
