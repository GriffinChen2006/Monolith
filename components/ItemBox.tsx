import { Text, TouchableOpacity, View } from 'react-native';

type AddOn = {
    name: string;
    price: number;
};

type ItemBoxProps = {
    name: string;
    imageUrl: string;
    price: number;
    addOns?: AddOn[];
};

const ItemBox = (props: ItemBoxProps) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    // Handle press action
                }}
                style={{
                    padding: 10,
                    backgroundColor: '#007AFF',
                    borderRadius: 5
                }}
            >
                <Text style={{ color: 'white' }}>Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};