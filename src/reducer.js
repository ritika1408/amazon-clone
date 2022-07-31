export const initialState ={
    basket: [],
    user:null
};
//selector
export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price+ amount,0)

const reducer = (state, action ) =>{
    console.log(action);
    switch (action.type){
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
        //current basket+ the item that was selected to be added
      };
    
    case "EMPTY_BASKET":
      return{
        ...state,
        basket : []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);//finds the first match and removes
      let newBasket= [...state.basket];
      if (index >= 0) {
        newBasket.splice(index,1);//cutting the item to be removed and displaying the new basket
      }
      else{
        console.warn(`Can't remove product(id: ${action.id}) as its not in the basket !`)
      }
      return{
        ...state,
        basket:newBasket
      }
    case "SET_USER":
      return{
        ...state,
        user: action.user,
      }
    default:
        return state;


    

    
    }
    
    
};

export default reducer;
