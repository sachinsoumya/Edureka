const cart = ['Tea' , 'surfexel' , 'Dryfruits'];
// const p = createOrder(cart); //returns order id
// console.log(p);
createOrder(cart).then(function(orderId){
   console.log(orderId);
   return orderId;
})

.then(function(orderId){
    return proceedPayment(orderId);
//     console.log(proceedPayment(orderId));
})
.then(function(paymentinfo ,orderId){
    console.log(paymentinfo);
    return showOrderSummery(orderId)

})
.then(function(summery ,orderId){
    console.log(summery);
    return updateBalance(orderId);
})
.then(balance=> console.log(balance))

.catch(function(error){
    console.log(error.message);
})
.then(function(){
    console.log('No matter what i will be called');
})

// proceedPayment(orderId);


//producer part

function createOrder(cart){
    const pr = new Promise(function(resolve , reject){
        if(!validateCart(cart)){
            const error = new Error('Cart is nor valid')
            reject(error);
        }

        const orderId = '123456';
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
           
        }
    });
    return pr ;
}
function proceedPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve('Payment successful')
    });

}
function showOrderSummery(orderId){
    return new Promise(function(resolve, reject){
        resolve('you have ordered 3 oil packets')
    })
}
function updateBalance(orderId){
    return new Promise(function(resolve, reject){
        resolve('now you have 3 coins')
    })
}

function validateCart(cart){
    return true;
}