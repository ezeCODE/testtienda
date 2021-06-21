
export default () => ({

    isLogin: false,
    loader: true,

    userProfile: [],
    userProfileStore: [],
    objectID: '',
    updateProfileSuccess:false,
    updateProfilesWarning:false,

    updateStoresSuccess:false,
    updatepStoreWarning:false,

    //chat
    stateRefChat: '',
    roomsList: [],
    listChat: [],
    paramsChat: '',
    renderchat: false,
    online: false,

    emailVerified: Boolean,
    resNewEmail: false,

    //fav list
    animationCarAdd: false,
    listFav: [],

    //car list
    list: [],
    itemslist: [],
    itemslistMP: [],
    productDelete: [],
    numQuantity: Number,
    totalPrices: 0,
    itemsDeleted: false,
    carTtotalProduct: 0,

    listShippingHistory : [],

    brandLis: [],
    ticketsList: [],

    //favs
    existsFavs : false,


})


