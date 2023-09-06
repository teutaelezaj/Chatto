//this screen is for the "see all" button in the My History section located in the
//home page

//make sure to include the clear chat history button here

import React, {useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./chatStyles";
import {GetItem} from "./asyncStorage";
import {useFocusEffect} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SeeAllChat = ({navigation, changes}) => {

    const [conversationHistories, setConversationHistories] = useState([]);
    const [questions, setQuestions] = useState([""]);
    const fetchConversationHistories = async () => {
        try {
            // await AsyncStorage.removeItem("conversationHistories");
            const historiesJson = await GetItem("conversationHistories");
            const historyData = historiesJson
                .slice()
                .reverse()
                .filter(item => item !== null); // reverse only once
            setConversationHistories(historyData)
        } catch (error) {
            console.log("Error fetching conversation histories:", error);
        }
    };
    // This is the useEffect hook that listens to changes in conversationHistories
    useEffect(() => {
        // console.log("Reversed Histories:", conversationHistories);
    }, [conversationHistories]);

    useFocusEffect(React.useCallback(() => {
        const loadHistory = async () => {
            const history = await AsyncStorage.getItem("conversationHistory");
            if (history && history.trim().startsWith("[")) {
                const historyArray = JSON.parse(history)
                setQuestions(historyArray.map((item) => item.question));
            } else {
                setQuestions([]);
            }
        };
        loadHistory();
        fetchConversationHistories();
    }, [changes]));

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

    return (
        <>
            {conversationHistories.length === 0 ?
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "black",
                }}>
                    {/* <Text style={{color: 'white', fontSize: 20, alignItems: 'center',}}>
                    Your history is empty. Try chatting with Nexus!
                    </Text> */}
<TouchableOpacity style={{ marginTop: 5, marginHorizontal: 20 }} onPress={() => navigation.navigate('GeneralChat')}>
    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Your history is empty. Click to chat with Nexus</Text>
</TouchableOpacity>

                </View>

                :
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: "black",}}>
                    <FlatList
                        data={conversationHistories}
                        extraData={conversationHistories}
                        renderItem={({item: history, index: historyIndex}) => {
                            let modifiedHistoryIndex = conversationHistories.length - historyIndex - 1;
                            if (modifiedHistoryIndex === -1) {
                                modifiedHistoryIndex = 0;
                            }
                            return (
                                <TouchableOpacity
                                    key={historyIndex}
                                    style={[
                                        styles.categoryBox,
                                        {
                                            backgroundColor: "#272521",
                                            marginRight: 10,
                                            padding: 20,
                                            width: 300,
                                            height: 120,
                                            borderRadius: 10,
                                            alignSelf: "flex-start",
                                            flexDirection: "column",
                                            marginVertical: 10
                                        },
                                    ]}
                                    onPress={() => {
                                        navigation.navigate("PreviousChat", {
                                            isNewChat: false,
                                            history:history,
                                            conversation: history,
                                            conversationIndex: modifiedHistoryIndex,
                                        });
                                    }
                                    }

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
                                                    marginTop: 15,
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
                                            See your recent conversation
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        style={{
                            alignSelf: "center",
                            paddingHorizontal: "5%",
                        }}

                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#5E17EB",
                            padding: 13,
                            marginHorizontal: 40,
                            marginTop: 20,
                            borderRadius: 5,
                            w: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={clearChatHistory}
                    >
                        <Text style={{color: "white", }}>Clear Chat</Text>



                    </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>

            }
        </>
    )

}
export default SeeAllChat