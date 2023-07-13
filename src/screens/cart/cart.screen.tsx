import React, {useCallback, useMemo} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardView, Text} from '../../components';
import {storeShoppingListData} from '../../store/slices/onBoardingSlice';
import {ListItemsProps, ShoppingResponse} from './cart.interface';
import Styles from './cart.style';
const CartScreen = () => {
  const {shoppingList} = useSelector(
    (state: ShoppingResponse) => state.onBoarding,
  );
  const dispatch = useDispatch();

  const renderItem = ({item}: any) => (
    <CardView
      isCartScreen
      itemName={item.name}
      itemImage={item?.img}
      value={item.qty}
      onIncQty={() => onIncQty(item)}
      onDecQty={() => onDecQty(item)}
      itemPrice={`₹${parseFloat(item.price).toFixed(2)}`}
      onCart={() => addToCart(item)}
      onDeleteItem={() => onDeleteItem(item)}
    />
  );

  const onIncQty = (item: ListItemsProps) => {
    const findItem = shoppingList.map((i: ListItemsProps) => {
      const tempPrice = Number(i.price) / Number(i.qty);
      if (i.id === item.id) {
        return {
          ...i,
          qty: i.qty + 1,
          price: Number(tempPrice) * Number(i.qty + 1),
        };
      }
      return i;
    });
    dispatch(storeShoppingListData(findItem));
  };

  const onDecQty = (item: ListItemsProps) => {
    if (item.qty > 1) {
      const findItem = shoppingList.map((i: ListItemsProps) => {
        const tempPrice = Number(i.price) / Number(i.qty);
        if (i.id === item.id) {
          return {
            ...i,
            qty: i.qty - 1,
            price: Number(tempPrice) * Number(i.qty - 1),
          };
        }
        return i;
      });
      dispatch(storeShoppingListData(findItem));
    }
  };
  const onDeleteItem = useCallback(
    (item: ListItemsProps) => {
      const filterItems = shoppingList.filter(
        (i: ListItemsProps) => i.id !== item.id,
      );
      dispatch(storeShoppingListData(filterItems));
    },
    [dispatch, shoppingList],
  );

  const addToCart = useCallback(
    (item: ListItemsProps) => {
      dispatch(storeShoppingListData([...shoppingList, item]));
    },
    [dispatch, shoppingList],
  );

  const memoizedData = useMemo(() => {
    const filter = shoppingList.map((obj: ListItemsProps) => obj.price);
    const sum =
      filter.length > 0
        ? filter.reduce((result: number, value: number) => result + value)
        : 0;
    return sum;
  }, [shoppingList]);

  return (
    <SafeAreaView testID="cart-screen" style={Styles.container}>
      <FlatList
        data={shoppingList}
        extraData={shoppingList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={Styles.totalView}>
        <Text>{`Total  ₹${parseFloat(memoizedData).toFixed(2)}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
