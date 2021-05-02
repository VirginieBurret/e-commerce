// for manipulate data

export const initialState = {
    basket : [],
    user:null,
}


// Selector
export const getbasketTotal = (basket) =>
  basket?.reduce((amount, product) => product.price + amount,0);
  // amount= initial amount qu'on initialise à 0
  // reduce va prendre toutes les valeurs dans le tableau et les regrouper en une seule


const reducer =(state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }



        case 'REMOVE_FROM_BASKET': 
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );
        console.log('INDEX',index)
        const newBasket = [...state.basket]
        if(index >= 0){
          newBasket.splice(index,1);
        }else{
            console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`)
        }
          return{
              ...state,
              // on peut faire ça mais si on a plusieurs fois le même article ça va tous les supprimer 
             // basket: state.basket.filter(item => item.id !==action.id)
             // on va plutot utiliser un index
             basket:newBasket
          }

        case 'SET_USER': 
          return{
              ...state,
              user:action.user
          }
          default: 
          return state;
    }
}

export default reducer;