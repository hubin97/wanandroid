
import React from "react"; 
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import navi_back_b from '../images/navi_back_b.png';

const { width: KW, height: KH } = Dimensions.get('window');

export default Header = ({ title, backgroundColor='#fff', color='#333', leftContent=null, leftTapClick, rightContent=null, rightTapClick }) => {

    return (
        <View style={{ width: KW, height: 44, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 0.5 }}>
            <Text style={{ height: 24, lineHeight: 24, fontSize: 17, fontWeight: '500', color: color }}>{title}</Text>
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', justifyContent: 'center', left: 20, width: 24, height: 24 }} onPress={leftTapClick}>
                { leftContent ? leftContent: (<Image style={{ width: 15, height: 15 }} source={navi_back_b}/>) }
            </TouchableOpacity>
            {
                rightContent && (
                    <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', justifyContent: 'center', right: 20, width: 24, height: 24 }} onPress={rightTapClick}>
                        { rightContent }
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

PropTypes.Header = {
    title: PropTypes.string,
    backgroundColor: PropTypes.color,
    color: PropTypes.color,
    rightContent: React.Component || null,

}