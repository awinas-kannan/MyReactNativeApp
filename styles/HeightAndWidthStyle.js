import { View, Text } from "react-native";

export const FixedDimensionsBasics = () => {
    return (
        <View>
            <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue',
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'skyblue',
                }}
            />
            <View
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'steelblue',
                }}
            />
        </View>
    );
};

export const FlexDimensionsBasics = () => {
    return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        //   <View style={{flex: 1}}>
        <View style={{ height: 1000 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    );
};


export const PercentageDimensionsBasics = () => {
    // Try removing the `height: '100%'` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    return (
        <View style={{ height: '100%' }}>
            <View
                style={{
                    height: '15%',
                    backgroundColor: 'powderblue',
                }}
            />
            <View
                style={{
                    width: '66%',
                    height: '35%',
                    backgroundColor: 'skyblue',
                }}
            />
            <View
                style={{
                    width: '33%',
                    height: '50%',
                    backgroundColor: 'steelblue',
                }}
            />
        </View>
    );
};