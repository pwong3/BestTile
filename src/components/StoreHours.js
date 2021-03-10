import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import fire from '../config/fire';

class StoreHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: '',
        }
    }

    scStoreHours() {
        const rootRef = fire.database().ref();
        const storeHoursRef = rootRef.child('StoreHours')
        const storeRef = storeHoursRef.child('SChours');
        this.loadHours(storeRef);
    }
    sfStoreHours() {
        const rootRef = fire.database().ref();
        const storeHoursRef = rootRef.child('StoreHours')
        const storeRef = storeHoursRef.child('SFhours');
        this.loadHours(storeRef);
    }
    loadHours(storeRef) {
        storeRef.once('value', (hoursSnapshot) => {
            this.setState({
                hours: hoursSnapshot.val()
            })
        })
    }
    componentDidMount() {
        const store = this.props.store;
        if (store === 'SC') {
            this.scStoreHours();
        } else if (store === 'SF') {
            this.sfStoreHours();
        }
    }
    render() {
        const { cardSecTextStyle } = styles;
        const hours = '8:00 a.m. - 5:30 p.m.\n';
        return (
            <View>
                <Text style={cardSecTextStyle}>Store Hours{"\n"}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', lineHeight: 20 }}>
                        Monday{"\n"}
                        Tuesday{"\n"}
                        Wednesday{"\n"}
                        Thursday{"\n"}
                        Friday{"\n"}
                        Saturday{"\n"}
                        Sunday
                        </Text>
                    <Text style={{ fontSize: 16, marginLeft: 15, lineHeight: 20 }}>
                        {this.state.hours}{'\n'}
                        {this.state.hours}{'\n'}
                        {this.state.hours}{'\n'}
                        {this.state.hours}{'\n'}
                        {this.state.hours}{'\n'}
                        {this.state.hours}{'\n'}
                        Closed
                        </Text>
                </View>
            </View>
        )
    }
}
const styles = {
    cardSecTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
}

export { StoreHours };