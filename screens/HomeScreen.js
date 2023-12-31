/** @format */

import React, {useState} from "react";
import {
    Dimensions,
    FlatList,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FontAwesome5, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useFocusEffect} from "@react-navigation/native";
import {GetItem} from "./asyncStorage";
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

const suggestionsData = [
    {
        category: "Fun",
        emoji: "😆",
        subcategories: ["Astrology", "Dream Interpreter", "Storyteller", "Riddles", "Jokes"],
    },
    {
        category: "Education",
        emoji: "🎓",
        subcategories: ["Math", "History", "Software Engineering", "Study Tips", "Quiz"],
    },
    {
        category: "Relationship",
        emoji: "💞",
        subcategories: ["Dating", "Gift Advice", "Friendships", "Love Languages", "Breakup Advice" ],
    },
    // Add more categories and subcategories here
    {
        category: "Personal Finance",
        emoji: "💰",
        subcategories: ["Building Wealth", "Stocks", "Investing", "Credit Cards", "Budgeting"],
    },

    {
        category: "Career",
        emoji: "👔",
        subcategories: ["Interview Help", "Career Options", "Breaking Into Tech", "Salary Negotiating", "Internships"],
    },

    {
        category: "Fitness & Nutrition",
        emoji: "💪",
        subcategories: ["Building Muscle", "Losing Weight", "Nutrition Tips", "Yoga & Meditation", "Healthy Recipes"],
    },
];

const subcategoryScreens = {
    "Building Muscle": "Fitness",
    Astrology: "Horrorscope",
    Stocks: "Finance",
    "Software Engineering": "Coding",
    "Nutrition Tips": "Nutrition",
    "Dream Interpreter": "Dream",
    Storyteller: "Story",
    Math: "Math",
    History: "History",
    "Software Engineering": "SWE",
    Dating: "Dating",
    "Gift Advice": "Gift",
    Friendships: "Friends",
    "Building Wealth": "Wealth",
    Investing: "Investing",
    "Interview Help": "Interview",
    "Career Options": "Career",
    "Breaking Into Tech": "Tech",
    "Losing Weight": "Weight",
    "Riddles": "RiddlesScreen",
    "Jokes": "JokesScreen",
    "Study Tips": "StudyTipsScreen",
    "Quiz": "QuizScreen",
    "Love Languages": "LoveScreen",
    "Breakup Advice": "BreakupScreen",
    "Credit Cards": "CreditcardsScreen",
    "Budgeting": "BudgetingScreen",
    "Salary Negotiating": "SalaryScreen",
    "Internships": "InternshipScreen",
    "Yoga & Meditation": "YogaScreen",
    "Healthy Recipes": "HealthyScreen",
    // Add other subcategories and their corresponding screen names here

    //add the rest later
};

export default function HomeScreen({navigation, changes}) {
    const [selectedCategory, setSelectedCategory] = useState("Fun");
    const [questions, setQuestions] = useState([""]);
    const [conversationHistories, setConversationHistories] = useState([]);
    const [modifiedIndex, setModifiedIndex] = useState([])

    // console.log("Message", questions);

    // This is your fetchConversationHistories function
    const fetchConversationHistories = async () => {
        try {
            // await AsyncStorage.removeItem("conversationHistories");
            const historiesJson = await GetItem("conversationHistories");
            // Saving the historiesJson for the index of flatlist
            setModifiedIndex(historiesJson)

            // Setting the last five conversations
            // setConversationHistories(historiesJson)
            const historyData = historiesJson
                .slice(Math.max(historiesJson.length - 5, 0))
                .reverse()
                .filter(item => item !== null);

            setConversationHistories(historyData);

        } catch (error) {

            console.log("Error fetching convesation histories:", error);
        }
    };

    // This is the useEffect hook that listens to changes in conversationHistories
    React.useEffect(() => {
        // console.log("Reversed Histories:", conversationHistories);
    }, [conversationHistories]);

    useFocusEffect(
        React.useCallback(() => {
            const loadHistory = async () => {
                const history = await AsyncStorage.getItem("conversationHistory");
                if (history && history.trim().startsWith("[")) {
                    const historyArray = JSON.parse(history);

                    setQuestions(historyArray.map((item) => item.question));

                } else {
                    setQuestions([]);
                }

            };

            loadHistory();
            fetchConversationHistories();
        }, [changes])
    );

    const renderConversationHistories = () => {
        if (conversationHistories.length === 0) {
            return (
                <View style={styles.emptyMessageContainer}>
                    <Text style={styles.emptyMessageText}>
                        Your history is empty. Try chatting with Nexus!
                    </Text>
                </View>
            );
        }
        return conversationHistories.map((history, historyIndex) => (
            <TouchableOpacity
                key={historyIndex}
                style={styles.historySquare}
                onPress={() => {
                    if (questions[0] === item) {
                        navigation.navigate("GeneralChat", {
                            history: [],
                            isNewChat: true,
                            conversationHistories: conversationHistories,
                        });
                    }
                }}
            >
                <Text style={styles.historyTitle}>
                    {history[0]?.content || "No title"}
                </Text>
            </TouchableOpacity>
        ));
    };

    const clearChatHistory = async () => {
        try {
            await AsyncStorage.setItem("conversationHistories", JSON.stringify([]));
            console.log("Chat history cleared.");
            setConversationHistories([]);
        } catch (error) {
            console.log("Error clearing chat history:", error);
        }
    };

    const renderQuestion = ({item, index}) => (
        <TouchableOpacity
            style={[styles.categoryBox, {alignSelf: "flex-start"}]} // Align the box to the left
            onPress={() => {
                if (questions[0] === item) {
                    navigation.navigate("GeneralChat", {isNewChat: false});
                }
            }}
        >
            <View
                style={{
                    width: "90%",
                    alignItems: "flex-start",
                    flexDirection: "column",
                }}
            >
                <Text
                    style={[
                        styles.categoryText,
                        {
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "white",
                            marginBottom: 5, // Add marginBottom to create spacing between item name and "See your recent conversation"
                        },
                    ]}
                    numberOfLines={1}
                >
                    {item}{" "}
                    {/* Display the name of the category the user was chatting with */}
                </Text>
                <Text
                    style={[
                        styles.categoryText,
                        {
                            fontSize: 14,
                            color: "white",
                            fontWeight: "normal",
                            marginTop: 5,
                        }, // Add marginTop to create spacing between item name and "See your recent conversation"
                    ]}
                >
                    See your recent conversation
                </Text>
            </View>
        </TouchableOpacity>
    );

    const handleCategoryPress = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    React.useLayoutEffect(() => {
        handleCategoryPress("Fun");
    }, []);
    

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Chatto",
            headerTitleAlign: "left",

            headerRight: () => (
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        style={{marginRight: 15}}
                        onPress={() => Linking.openURL("https://www.google.com")}
                    >
                        <FontAwesome5 name="discord" size={24} color="rgb(94, 23, 235)"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginRight: 15}}
                        onPress={() => navigation.navigate("Settings")}
                    >
                        <Ionicons name="ios-settings" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            ),

            headerStyle: {
                backgroundColor: "#252525", // replace with your desired color
            },
            headerTintColor: "#FFFFFF", // replace with your desired color
        });
    }, [navigation]);

    const historyData = [];
    console.log("conversationHistory",conversationHistories)
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.suggestionsText}>Chatto</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity
                            style={{marginRight: 15}}
                            onPress={() => Linking.openURL("https://www.google.com")}
                        >
                            <FontAwesome5 name="discord" size={26} color="#819AF7"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{marginRight: 15}}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <Ionicons name="ios-settings" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <Text style={styles.suggestionsText}>My History</Text>
        <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => navigation.navigate("SeeAllChats")}
        >
            <Text style={{color: "white"}}>See All</Text>
        </TouchableOpacity>
    </View>

    {conversationHistories && conversationHistories.length > 0 ? (
        <View style={{flexDirection: 'row-reverse'}}>
            <FlatList
                data={conversationHistories}
                extraData={conversationHistories}
                renderItem={({item: history, index: historyIndex}) => {
                    let modifiedHistoryIndex = modifiedIndex.length - historyIndex - 1;
                    if (modifiedHistoryIndex === -1) {
                        modifiedHistoryIndex = 0;
                    }

                    return (
                        <TouchableOpacity
                            key={historyIndex}
                            style={[
                                styles.categoryBox,
                                {alignSelf: "flex-start", marginBottom: 10},
                            ]}
                            onPress={() => {
                                navigation.navigate("PreviousChat", {
                                    isNewChat: false,
                                    history: history,
                                    conversation: history,
                                    conversationIndex: modifiedHistoryIndex,
                                });
                            }}
                        >
                            <View
                                style={{
                                    width: "90%",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                }}
                            >
                                <Text
                                    style={[
                                        styles.categoryText,
                                        {
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            color: "white",
                                            marginBottom: 5,
                                        },
                                    ]}
                                    numberOfLines={2}
                                >
                                    {`${history[0]?.content}`}
                                </Text>
                                <Text
                                    style={[
                                        styles.categoryText,
                                        {
                                            fontSize: 14,
                                            color: "white",
                                            fontWeight: "normal",
                                            marginTop: 5,
                                        },
                                    ]}
                                >
                                    See your recent conversations
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                style={{
                    alignSelf: "center",
                    paddingLeft: 6
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    ) : (
<View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 25, paddingBottom: 25}}>
    <Text style={{fontSize: 22, textAlign: 'center', color: '#272521'}}>
        Your history is empty 😔
    </Text>
    <TouchableOpacity
        style={{
            marginTop: 18,
            backgroundColor: '#5E17EB',
            padding: 10,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
        }}
        onPress={() => navigation.navigate('GeneralChat')}
    >
        <Text style={{color: 'white', fontSize: 17}}>Start Chatting!</Text>
    </TouchableOpacity>
</View>


    )}
</View>

                <View>
                    <Text style={styles.suggestionsText}>Suggestions</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoriesScrollView}
                    >
                        {suggestionsData.map((suggestion, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.categoryButton,
                                    {
                                        backgroundColor:
                                            selectedCategory === suggestion.category
                                                ? "#5E17EB"
                                                : "#272521",
                                    },
                                ]}
                                onPress={() => handleCategoryPress(suggestion.category)}
                            >
                                <Text style={styles.categoryButtonText}>
                                    {suggestion.emoji} {suggestion.category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View
                    style={{
                        transform: [
                            {translateY: selectedCategory ? -10 : 90},
                            {scaleY: selectedCategory ? 1 : 0},
                        ],
                        opacity: selectedCategory ? 1 : 0,
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >
                    <FlatList
                        data={
                            selectedCategory
                                ? suggestionsData.find(
                                (suggestion) => suggestion.category === selectedCategory
                                ).subcategories
                                : []
                        }
                        renderItem={({item: subcategory}) => (
                            <TouchableOpacity
                                style={styles.subcategoryButton}
                                onPress={() => {
                                    const screenName =
                                        subcategoryScreens[subcategory] || "DefaultScreen";
                                    navigation.navigate(screenName);
                                }}
                            >
                                <Text style={styles.subcategoryButtonText}>{subcategory}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.subcategoriesContent}
                        ListEmptyComponent={<View style={{flex: 1}}/>}
                    />
                </View>
                <Text
                    style={
                        styles.subtitleText
                        // Reduce marginBottom from 30 to 10
                    }
                >
                    Chat with Nexus, an AI chat bot designed by Chatto to assist you with
                    anything you need!
                </Text>
                {/* <View style={{ height: 10 }} /> */}

                {/* History Section */}

                {/* Suggestions */}
            </View>

            <View style={styles.messageInputContainer}>
                <TextInput
                    style={styles.messageInput}
                    placeholder="Write your message..."
                    placeholderTextColor={"#212123"}
                    onFocus={() =>
                        navigation.navigate("GeneralChat", {isNewChat: true})
                    }
                />

                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={() =>
                        navigation.navigate("GeneralChat", {isNewChat: true})
                    }
                >
                    <MaterialIcons name="send" size={24} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        paddingTop: 50, // Add padding to move content down
    },
    mainContent: {
        flexGrow: 1,
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20, // Add marginTop
    },

    boxView: {
        width: 220,
        height: 100,
        backgroundColor: "#272521",
        borderRadius: 10,
        justifyContent: "center",
        // alignSelf: "center",
    },
    boxTextStyle: {
        color: "#fff",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 22,
    },
    historyTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
        alignSelf: "center",
    },
    welcomeText: {
        fontSize: 33,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 40,
        marginTop: 55,
        textAlign: "center",
    },
    wavingEmoji: {
        fontSize: 28,
    },
    subtitleText: {
        fontSize: 18,
        color: "lightgrey",
        // marginBottom: 30,
        marginRight: 30,
        marginLeft: 20,
    },
    suggestionsText: {
        fontSize: 29,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 15, // Reduce marginBottom
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 8, // Add marginTop
    },
    categoriesScrollView: {
        flexDirection: "row",
        maxHeight: 60,
        marginBottom: 10, // Add marginBottom to give some space between the categories and subcategories
    },
    subcategoriesScrollView: {
        flex: 1,
        backgroundColor: "transparent",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        width: screenWidth,
        marginTop: 0,
        alignItems: "center", // Add this line
        justifyContent: "center", // Add this line
    },
    categoryContainer: {
        alignItems: "center",
    },
    categoryButton: {
        backgroundColor: "#219ebc",
        height: 40, // Set a fixed height for the categoryButton
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 25,
        justifyContent: "center", // Add this line to vertically center the text
        // marginBottom: 10, // Remove this line
        marginHorizontal: 10,
    },
    categoryButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 17,
    },
    subcategoriesScrollView: {
        flex: 1,
        backgroundColor: "transparent",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        width: screenWidth,
        marginTop: 0,
    },

    subcategoryButton: {
        backgroundColor: "#272521",

        paddingVertical: 16,
        paddingHorizontal: 20,
        width: screenWidth - 40, // Subtract the paddingHorizontal of the ScrollView (20 * 2)
        // borderRadius: 0, //square
        borderBottomWidth: 1,
        // borderBottomColor: "#5E17EB",
        marginVertical: 5, // Add vertical margin
        borderRadius: 12,
    },
    subcategoryButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 17,
        textAlign: "center",
    },
    generalChatButton: {
        backgroundColor: "#5E17EB",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 30,
        width: 180, // Add a fixed width, adjust this value to your desired width
        alignSelf: "center", // To center the button
    },
    generalChatButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
        textAlign: "center",
    },
    messageInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#212123",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        paddingHorizontal: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 80,
        width: screenWidth,
        alignSelf: "center", // Add alignSelf to center the message input container horizontally
    },
    messageInput: {
        backgroundColor: "#000000",
        borderRadius: 25,
        color: "#272521",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        fontSize: 18,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: "#5E17EB",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    subcategoriesWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    subcategoriesContent: {
        flexGrow: 1,
        paddingBottom: 5, // Add paddingBottom to provide some padding at the bottom of the subcategories list
    },
    historySection: {
        marginTop: 0, // Add marginTop to create more spacing between Meet Nexus and My History
        // marginBottom: 100,
    },

    emptyHistoryText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginTop: 10, // Add marginTop for the empty history message
    },
    categoryBox: {
        width: 230, // Set the width to 80%
        height: 120, // Set the height to 100
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#272521",
        marginRight: 15, // Add spacing between the boxes
    },
    suggestionsAndSubcategoriesContainer: {
        marginTop: 0,
    },
    emptyMessageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyMessageText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5E17EB", // You can use any color you prefer
    },
});
