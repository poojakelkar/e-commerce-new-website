const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };

    case "SET_SORT_TYPE":
      return { ...state, sortBy: action.payload };

    case "SET_CATEGORY":
      return state.sortByFilters.sortByCategory.includes(action.payload)
        ? {
            ...state,
            sortByFilters: {
              ...state.sortByFilters,
              sortByCategory: state.sortByFilters.sortByCategory.filter(
                (item) => item !== action.payload
              ),
            },
          }
        : {
            ...state,
            sortByFilters: {
              ...state.sortByFilters,
              sortByCategory: state.sortByFilters.sortByCategory.concat(
                action.payload
              ),
            },
          };

    case "SET_SUB_CATEGORY":
      return { ...state, subCategory: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_BRAND":
      return state.sortByFilters.sortByBrands.includes(action.payload)
        ? {
            ...state,
            sortByFilters: {
              ...state.sortByFilters,
              sortByBrands: state.sortByFilters.sortByBrands.filter(
                (item) => item !== action.payload
              ),
            },
          }
        : {
            ...state,
            sortByFilters: {
              ...state.sortByFilters,
              sortByBrands: state.sortByFilters.sortByBrands.concat(
                action.payload
              ),
            },
          };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortBy: null,
        priceRange: 10000,
        rating: 0,
        sortByFilters: {
          sortByCategory: [],
          sortByBrands: [],
        },
        subCategory: null,
        tag: null,
      };
    case "SET_CART":
      return {
        ...state,
        cart: [{ ...action.payload, quantity: 1 }, ...state?.cart],
      };
    case "REMOVE_FROM_CART":
      const cart = state?.cart?.filter((item) => item._id !== action.payload);
      return { ...state, cart: cart };
    case "SET_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      const wishlist = state?.wishlist?.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, wishlist: wishlist };
    case "SET_TAG":
      return { ...state, tag: action.payload };
    case "SET_SHOW_TOAST":
      return { ...state, showtoast: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SHOW_ADDRESS_MODAL":
      return { ...state, showAddressModal: action.payload };
    case "ADD_NEW_ADDRESS":
      return { ...state, address: [...state.address, action.payload] };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        address: state.address.filter(
          (item) => item.address_id !== action.payload
        ),
      };
    case "SET_ADDRESS_EDIT_MODE":
      return { ...state, addressEditMode: action.payload };
    case "SET_ADDRESS_TO_EDIT":
      return { ...state, addressToBeEdited: action.payload };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: state.address.map((item) =>
          item.address_id === action.payload.address_id ? action.payload : item
        ),
      };
    case "INCREMENT_QUANTITY": {
      const clonedState = { ...state };
      let cartData = [...clonedState?.cart];
      if (cartData?.length) {
        const productIndex = cartData?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (productIndex > -1) {
          const currentQty = cartData[productIndex]?.quantity ?? 0;
          const newQty = currentQty + 1;
          cartData[productIndex] = {
            ...cartData[productIndex],
            quantity: newQty,
          };
        }

        clonedState.cart = [...cartData];
      }
      return { ...clonedState };
    }
    case "DECREMENT_QUANTITY": {
      const clonedData = { ...state };
      let cartData = [...clonedData?.cart];
      if (cartData?.length) {
        const productIndex = cartData?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (productIndex > -1) {
          const currentQty = cartData[productIndex]?.quantity ?? 0;
          const newQty = currentQty > 1 ? currentQty - 1 : currentQty;
          console.log({ newQty });
          cartData[productIndex] = {
            ...cartData[productIndex],
            quantity: newQty,
          };
        }
      }
      clonedData.cart = [...cartData];
      return { ...clonedData };
    }
    case "MOVE_TO_CART_FROM_WISHLIST": {
      const stateCopy = { ...state };
      if (stateCopy?.wishlist?.length) {
        const productIndex = stateCopy?.wishlist?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (productIndex > -1) {
          const product = stateCopy?.wishlist[productIndex];
          const newWishlist = stateCopy?.wishlist?.filter(
            (wl) => wl?._id !== product?._id
          );
          stateCopy.wishlist = [...newWishlist];
          const productInCartIndex = stateCopy?.cart?.findIndex(
            (item) => item?._id === action?.payload
          );
          if (productInCartIndex > -1) {
            stateCopy.cart[productInCartIndex] = {
              ...stateCopy.cart[productInCartIndex],
              quantity: stateCopy.cart[productInCartIndex].quantity + 1,
            };
          } else {
            stateCopy.cart.push({ ...product, quantity: 1 });
          }
        }
      }
      return { ...stateCopy };
    }
    default:
      return state;
  }
};
export default stateReducer;
