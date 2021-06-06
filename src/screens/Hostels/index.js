import React, {useState, useReducer, useEffect} from 'react';
import {Text, FlatList, View, RefreshControl} from 'react-native';
import styles from '../../components/HostelList/styles';
import hostelReducer, {
  useHostelRecuderMethods,
  initialState,
} from '../../context/reducers/hostel';

const Item = ({title, location}) => (
  <View style={styles.item}>
    <Text style={styles.hostelTitle}>{title}</Text>
    <Text style={styles.hostelLocation}>{location}</Text>
  </View>
);

function Hostels() {
  const [state, dispatch] = useReducer(hostelReducer, initialState);
  const {getHostels} = useHostelRecuderMethods(dispatch);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getHostels();
  }, []);

  const renderItem = ({item}) => (
    <Item title={item.hostelName} location={item.location} />
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await getHostels();
    setRefreshing(false);
  };

  return (
    <FlatList
      style={styles.wrapper}
      data={state.data}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default Hostels;
