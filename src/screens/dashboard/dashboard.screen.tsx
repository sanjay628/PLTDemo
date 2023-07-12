import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardView, Text} from '../../components';
import {storeShoppingListData} from '../../store/slices/onBoardingSlice';
import {Colors} from '../../theme';
import {NavigationRoutes} from '../../utils';
import {ListItemsProps, ShoppingResponse} from './dashboard.interface';
import Styles from './dashboard.style';

const DashboardScreen = (props: any) => {
  const {shoppingList} = useSelector(
    (state: ShoppingResponse) => state.onBoarding,
  );

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchShoppingList();
  }, []);

  const fetchShoppingList = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/benirvingplt/products/products',
      );
      const updateArr = response.data.map((item: ListItemsProps) => ({
        ...item,
        qty: 1,
      }));
      setData(updateArr);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}: any) => (
    <CardView
      itemName={item.name}
      itemPrice={`₹${parseFloat(item.price).toFixed(2)}`}
      onCart={() => addToCart(item)}
      itemImage={item.img}
    />
  );

  const addToCart = useCallback(
    (item: ListItemsProps) => {
      dispatch(storeShoppingListData([...shoppingList, item]));
    },
    [dispatch, shoppingList],
  );

  return (
    <SafeAreaView testID="dashboard-screen" style={Styles.container}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        testID="cart-view"
        style={Styles.cartView}
        onPress={() => props.navigation.navigate(NavigationRoutes.CART_SCREEN)}>
        <Text color={Colors.COLOR_RED}>{`Cart ${shoppingList?.length}`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashboardScreen;
