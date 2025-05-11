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

    const [editingName, setEditingName] = useState(false);
    const [editingPrice, setEditingPrice] = useState(false);
    const [editingAddOns, setEditingAddOns] = useState<boolean[]>(
        (props.addOns || []).map(() => false)
    );

    const updateAddOnField = (index: number, field: keyof AddOn, value: string | number) => {
        const updated = [...addOns];
        updated[index] = { ...updated[index], [field]: value };
        setAddOns(updated);
    };

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
                <Text style={{ color: 'white' }}>{isOpen ? 'Hide Item' : 'Show Item'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={{ marginTop: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                    <Text>Name:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        editable={editingName}
                        style={{
                            borderBottomWidth: 1,
                            backgroundColor: editingName ? 'white' : '#e0e0e0',
                        }}
                    />
                    {!editingName ? (
                        <TouchableOpacity onPress={() => setEditingName(true)}>
                            <Text style={{ color: '#007AFF', marginTop: 5 }}>Edit</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setEditingName(false)}>
                            <Text style={{ color: 'green', marginTop: 5 }}>Save</Text>
                        </TouchableOpacity>
                    )}
                    <Text style={{ marginTop: 10 }}>Price:</Text>
                    <TextInput
                        value={price}
                        onChangeText={setPrice}
                        editable={editingPrice}
                        keyboardType="numeric"
                        style={{
                            borderBottomWidth: 1,
                            backgroundColor: editingPrice ? 'white' : '#e0e0e0',
                        }}
                    />
                    {!editingPrice ? (
                        <TouchableOpacity onPress={() => setEditingPrice(true)}>
                            <Text style={{ color: '#007AFF', marginTop: 5 }}>Edit</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setEditingPrice(false)}>
                            <Text style={{ color: 'green', marginTop: 5 }}>Save</Text>
                        </TouchableOpacity>
                    )}
                    {addOns.map((addOn, index) => (
                        <View key={index} style={{ marginTop: 15 }}>
                            <Text>Add-On {index + 1} Name:</Text>
                            <TextInput
                                value={addOn.name}
                                onChangeText={(text) => updateAddOnField(index, 'name', text)}
                                editable={editingAddOns[index]}
                                style={{
                                    borderBottomWidth: 1,
                                    backgroundColor: editingAddOns[index] ? 'white' : '#e0e0e0',
                                }}
                            />
                            <Text>Add-On {index + 1} Price:</Text>
                            <TextInput
                                value={String(addOn.price)}
                                onChangeText={(text) => updateAddOnField(index, 'price', parseFloat(text) || 0)}
                                editable={editingAddOns[index]}
                                keyboardType="numeric"
                                style={{
                                    borderBottomWidth: 1,
                                    backgroundColor: editingAddOns[index] ? 'white' : '#e0e0e0',
                                }}
                            />
                            {!editingAddOns[index] ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        const updated = [...editingAddOns];
                                        updated[index] = true;
                                        setEditingAddOns(updated);
                                    }}
                                >
                                    <Text style={{ color: '#007AFF', marginTop: 5 }}>Edit</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        const updated = [...editingAddOns];
                                        updated[index] = false;
                                        setEditingAddOns(updated);
                                    }}
                                >
                                    <Text style={{ color: 'green', marginTop: 5 }}>Save</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}
