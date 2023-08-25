
import React from 'react';
// import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from "react-native";
// import { Colors, Header, LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavi } from "./routers/index";
import { LoaderListView } from './utils/content-loader';

// export const App = () => {
export default function App() {
    return (
        // <LoaderListView/>
        <NavigationContainer>
            <AppNavi/>
        </NavigationContainer>
    );
}
