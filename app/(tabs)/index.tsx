import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ItemBox from '../../components/ItemBox';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ItemBox
        name="Pizza"
        imageUrl=""
        price={9.99}
        addOns={[
          { name: 'Extra Cheese', price: 1.5 },
          { name: 'Mushrooms', price: 1.0 },
        ]}
      />
      <ItemBox
        name="Soda"
        imageUrl=""
        price={1.99}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});