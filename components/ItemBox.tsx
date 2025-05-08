import { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setIsOpen(prev => !prev)
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