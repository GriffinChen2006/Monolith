import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(String(props.price));
    const [addOns, setAddOns] = useState<AddOn[]>(props.addOns || []);

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
                <Text style={{ color: 'white' }}>{isOpen ? 'Hide Item' : 'Edit Item'}</Text>
            </TouchableOpacity>

            {isOpen && (
                <View style={{ marginTop: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                    <Text>Name:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="Item name"
                        style={{ borderBottomWidth: 1, marginBottom: 10 }}
                    />

                    <Text>Price:</Text>
                    <TextInput
                        value={price}
                        onChangeText={setPrice}
                        placeholder="Item price"
                        keyboardType="numeric"
                        style={{ borderBottomWidth: 1, marginBottom: 10 }}
                    />

                    {addOns.map((addOn, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text>Add-On {index + 1} Name:</Text>
                            <TextInput
                                value={addOn.name}
                                onChangeText={(text) => {
                                    const newAddOns = [...addOns];
                                    newAddOns[index].name = text;
                                    setAddOns(newAddOns);
                                }}
                                placeholder="Add-on name"
                                style={{ borderBottomWidth: 1 }}
                            />

                            <Text>Add-On {index + 1} Price:</Text>
                            <TextInput
                                value={String(addOn.price)}
                                onChangeText={(text) => {
                                    const newAddOns = [...addOns];
                                    newAddOns[index].price = parseFloat(text) || 0;
                                    setAddOns(newAddOns);
                                }}
                                keyboardType="numeric"
                                placeholder="Add-on price"
                                style={{ borderBottomWidth: 1 }}
                            />
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}