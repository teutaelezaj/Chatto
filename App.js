/** @format */  /** @format */ 

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import FitnessScreen from "./screens/FitnessScreen";
import FinanceScreen from "./screens/FinanceScreen";
import HomeScreen from "./screens/HomeScreen";
import GeneralChatScreen from "./screens/GeneralChatScreen";
import HorrorscopeScreen from "./screens/HorrorscopeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SettingsInfo from "./screens/SettingsInfo";
import TermsOfService from "./screens/TermsOfService";
import ChatRules from "./screens/ChatRules";
import AboutChatto from "./screens/AboutChatto";

import NutritionScreen from "./screens/NutritionScreen";
import DreamScreen from "./screens/DreamScreen";
import StoryScreen from "./screens/StoryScreen";
import MathScreen from "./screens/MathScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SWEScreen from "./screens/SWEScreen";
import DatingTipsScreen from "./screens/DatingTipsScreen";
import GiftScreen from "./screens/GiftScreen";
import FriendsScreen from "./screens/FriendsScreen";
import WealthScreen from "./screens/WealthScreen";
import InvestingScreen from "./screens/InvestingScreen";
import InterviewScreen from "./screens/InterviewScreen";
import CareerScreen from "./screens/CareerScreen";
import TechScreen from "./screens/TechScreen";
import WeightScreen from "./screens/WeightScreen";
import SeeAllChat from "./screens/SeeAllChat";
import PreviousChatScreen from "./screens/PreviousChatScreen";
import RiddlesScreen from "./screens/RiddlesScreen";
import JokesScreen from "./screens/JokesScreen";
import StudyTipsScreen from "./screens/StudyTipsScreen";
import QuizScreen from "./screens/QuizScreen";
import LoveScreen from "./screens/LoveScreen";
import BreakupScreen from "./screens/BreakupScreen";
import CreditcardsScreen from "./screens/CreditcardsScreen";
import BudgetingScreen from "./screens/BudgetingScreen";
import SalaryScreen from "./screens/SalaryScreen";
import InternshipScreen from "./screens/InternshipScreen";
import YogaScreen from "./screens/YogaScreen";
import HealthyScreen from "./screens/HealthyScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Loading"
                screenOptions={({route}) => ({
                    headerShown: route.name !== "Home", // Hide header for the 'Details' screen
                })}
            >
                {/* <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        /> */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: "Welcome"}}
                />
                <Stack.Screen
                    name="GeneralChat"
                    component={GeneralChatScreen}
                    options={{
                        title: "General Chat",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

                <Stack.Screen
                    name="Fitness"
                    component={FitnessScreen}
                    options={{
                        title: "Fitness Tips",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Finance"
                    component={FinanceScreen}
                    options={{
                        title: "Establishing Wealth",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                {/* Add more Stack.Screen components for other categories */}
                <Stack.Screen
                    name="Horrorscope"
                    component={HorrorscopeScreen}
                    options={{
                        title: "Horrorscopes",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Nutrition"
                    component={NutritionScreen}
                    options={{
                        title: "Nutrition",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Dream"
                    component={DreamScreen}
                    options={{
                        title: "Dreams",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Story"
                    component={StoryScreen}
                    options={{
                        title: "Storytelling",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Math"
                    component={MathScreen}
                    options={{
                        title: "Math",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{
                        title: "History",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="SWE"
                    component={SWEScreen}
                    options={{
                        title: "Software Engineering",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Dating"
                    component={DatingTipsScreen}
                    options={{
                        title: "Dating",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Gift"
                    component={GiftScreen}
                    options={{
                        title: "Gifting",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Friends"
                    component={FriendsScreen}
                    options={{
                        title: "Friendships",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Wealth"
                    component={WealthScreen}
                    options={{
                        title: "Wealth",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Investing"
                    component={InvestingScreen}
                    options={{
                        title: "Investing",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Interview"
                    component={InterviewScreen}
                    options={{
                        title: "Job Interviews",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Career"
                    component={CareerScreen}
                    options={{
                        title: "Career",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Tech"
                    component={TechScreen}
                    options={{
                        title: "Technology",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="Weight"
                    component={WeightScreen}
                    options={{
                        title: "Weight",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="RiddlesScreen"
                    component={RiddlesScreen}
                    options={{
                        title: "Riddles",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />



<Stack.Screen
                    name="JokesScreen"
                    component={JokesScreen}
                    options={{
                        title: "Jokes",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="StudyTipsScreen"
                    component={StudyTipsScreen}
                    options={{
                        title: "Study Tips",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="QuizScreen"
                    component={QuizScreen}
                    options={{
                        title: "Quiz",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="LoveScreen"
                    component={LoveScreen}
                    options={{
                        title: "Love Languages",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />


<Stack.Screen
                    name="BudgetingScreen"
                    component={BudgetingScreen}
                    options={{
                        title: "Budgeting",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />



<Stack.Screen
                    name="BreakupScreen"
                    component={BreakupScreen}
                    options={{
                        title: "Breakup Advice",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                
<Stack.Screen
                    name="CreditcardsScreen"
                    component={CreditcardsScreen}
                    options={{
                        title: "Credit Cards",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />


<Stack.Screen
                    name="SalaryScreen"
                    component={SalaryScreen}
                    options={{
                        title: "Salary Negotiating",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="InternshipScreen"
                    component={InternshipScreen}
                    options={{
                        title: "Internship",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />


<Stack.Screen
                    name="YogaScreen"
                    component={YogaScreen}
                    options={{
                        title: "Yoga & Meditation",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />

<Stack.Screen
                    name="HealthyScreen"
                    component={HealthyScreen}
                    options={{
                        title: "Healthy Recipes",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />





                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: "Settings",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="SettingsInfo"
                    component={SettingsInfo}
                    options={{
                        title: "Settings Information",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="TermsOfService"
                    component={TermsOfService}
                    options={{
                        title: "Terms of Service",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="ChatRules"
                    component={ChatRules}
                    options={{
                        title: "Chat Rules",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="AboutChatto"
                    component={AboutChatto}
                    options={{
                        title: "About Chatto",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name="SeeAllChats"
                    component={SeeAllChat}
                    options={{
                        title: "See All Chats",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}
                />
                <Stack.Screen
                    name='PreviousChat'
                    component={PreviousChatScreen}
                    options={{
                        title: "Previous Chat",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            alignSelf: "center",
                        },

                        headerTitleAlign: "center",
                        headerTintColor: "white",
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
