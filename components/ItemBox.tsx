import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

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
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(String(props.price));
    const [addOns, setAddOns] = useState<AddOn[]>(props.addOns || []);

    const handleAddAddOn = () => {
        setAddOns([...addOns, { name: '', price: 0 }]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsOpen(prev => !prev)}
                style={styles.toggleButton}
            >
                <Text style={styles.toggleText}>{isOpen ? 'Hide Item' : 'Show Item'}</Text>
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.box}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Name:</Text>
                        <TextInput
                            value={name}
                            editable={isEditing}
                            onChangeText={setName}
                            style={[styles.input, !isEditing && styles.readOnly]}
                            placeholder="Item name"
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Price:</Text>
                        <TextInput
                            value={price}
                            editable={isEditing}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                            style={[styles.input, !isEditing && styles.readOnly]}
                            placeholder="Item price"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => setIsEditing(prev => !prev)}
                        style={styles.editButton}
                    >
                        <Text style={styles.editText}>{isEditing ? 'Save' : 'Edit'}</Text>
                    </TouchableOpacity>

                    <View style={styles.addOnContainer}>
                        <Text style={styles.sectionTitle}>Add-Ons:</Text>

                        {addOns.map((addOn, index) => (
                            <View key={index} style={styles.addOnBox}>
                                <TextInput
                                    value={addOn.name}
                                    editable={isEditing}
                                    onChangeText={(text) => {
                                        const updated = [...addOns];
                                        updated[index].name = text;
                                        setAddOns(updated);
                                    }}
                                    style={[styles.input, !isEditing && styles.readOnly]}
                                    placeholder="Add-on name"
                                />
                                <TextInput
                                    value={String(addOn.price)}
                                    editable={isEditing}
                                    onChangeText={(text) => {
                                        const updated = [...addOns];
                                        updated[index].price = parseFloat(text) || 0;
                                        setAddOns(updated);
                                    }}
                                    keyboardType="numeric"
                                    style={[styles.input, !isEditing && styles.readOnly]}
                                    placeholder="Add-on price"
                                />
                            </View>
                        ))}

                        {isEditing && (
                            <TouchableOpacity onPress={handleAddAddOn} style={styles.addButton}>
                                <Text style={styles.addButtonText}>+ Add Add-On</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    toggleButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    toggleText: {
        color: 'white',
        textAlign: 'center',
    },
    box: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    row: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 2,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 6,
    },
    readOnly: {
        backgroundColor: '#e0e0e0',
    },
    editButton: {
        marginTop: 10,
        backgroundColor: '#FFA500',
        padding: 8,
        borderRadius: 5,
    },
    editText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    addOnContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addOnBox: {
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#28a745',
        padding: 8,
        borderRadius: 5,
    },
    addButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});
