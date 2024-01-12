import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from '../node_modules/axios/index';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  });

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.username}</Text>
        <Text style={styles.title}>{item.email}</Text>
      </View>
    );
  };

  const itemSeparatorComponent = () => {
    return <View style={styles.separatorLine}></View>;
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        <Text>List of Users</Text>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View>
        <Text>All Rights reserved @Walmart</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'coral',
    paddingTop: 2,
  },
});
