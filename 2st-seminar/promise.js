//promise ����
/* ----------------------------- */
/*      Fulfilled && Rejected    */
/* ----------------------------- */
const promise = new Promise(function (resolve, reject){
    const age = 25;
    if (age > 20){
        resolve(age);
    } else{
        reject(new Error("���̰� �ʹ� ��ϴ�."));
    }
})

promise.then(resolveData => {
    console.log(resolveData);
})

/* ------------------------- */
/*   3. Promise Chaining     */
/* ------------------------- */

const cook = (callback, timeout) => {
    setTimeout(callback, timeout);
};

