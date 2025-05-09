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

export default function ItemBox(props: ItemBoxProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={{ marginBottom: 20 }}>
            <TouchableOpacity
                onPress={() => setIsOpen(prev => !prev)}
                style={{
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: '#007AFF',
                    borderRadius: 5,
                }}
            >
                <Text style={{ color: 'white' }}>Add Item</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={{ marginTop: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                    <Text>Name: {props.name}</Text>
                    <Text>Price: ${props.price.toFixed(2)}</Text>
                    {props.addOns?.map((addOn, index) => (
                        <Text key={index}>+ {addOn.name} - ${addOn.price.toFixed(2)}</Text>
                    ))}
                </View>
            )}
        </View>
    );
}
