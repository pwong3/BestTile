import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from '../components/common';

const DeptCard = (props) => {
    const { viewStyle, textStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <Image
                    source={props.deptImage}
                    style={{ width: props.deptWidth - 20, height: 95, resizeMode: 'contain' }}
                />
            </CardSection>
            <View style={viewStyle} >
                <Text style={textStyle}>{props.deptText}</Text>
            </View>
        </Card>
    )
}
const styles = {
    viewStyle: {
        flex: 1,
        alignSelf: 'center',
        padding: 5
    },
    textStyle: {
        color: 'black',
        fontSize: 16
    },
}
export { DeptCard };