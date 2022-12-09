// 4. Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; после регистрации предложить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта, если все совпадает, то необходимо поменять значение ключа isAuth на true;

// let user = {
//     isAuth: false
//     };
    
//     let login = prompt("Введите логин: ");
//     let password = prompt("Введите пароль: ");
//     let passwordConfirm = prompt("Подтвердите пароль: ");
    
//     if(password !== passwordConfirm) {
//     alert("Пароли не совпадают!");
//     } else if(password.length < 6 || password.indexOf(" ") !== -1) {
//     alert("Пароль должен содержать не менее 6ти символов и не может состоять из пробелов!");
//     } else {
//     user.login = login;
//     user.password = password;
//     console.log("Регистрация успешно завершена!");
//     }
    
//     let authorize = confirm("Хотите авторизоваться на сайте?");
//     if(authorize) {
//     let loginInput = prompt("Введите логин: ");
//     let passwordInput = prompt("Введите пароль: ");
//     if(loginInput === user.login && passwordInput === user.password) {
//     user.isAuth = true;
//     console.log("Авторизация успешно завершена!");
//     } else {
//     console.log("Логин или пароль неверны!");
//     }
//     }
    
//     console.log("Объект пользователя: " + JSON.stringify(user));

// 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить ифнормацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете

let bankAccount = {
    balance: 0,
    purchases: {}
    };
    
    let deposit = prompt("Внесите сумму на депозит: ");
    bankAccount.balance += Number(deposit);
    
    let wantToGoShopping = confirm("Хотите пойти за покупками? ");
    
    if (!wantToGoShopping) {
    alert("До встречи!");
    }
    
    let productName = prompt("Введите название продукта: ");
    let productPrice = prompt("Введите стоимость продукта: ");
    bankAccount.purchases[productName] = Number(productPrice);
    bankAccount.balance -= Number(productPrice);
    
    productName = prompt("Введите название продукта: ");
    productPrice = prompt("Введите стоимость продукта: ");
    bankAccount.purchases[productName] = Number(productPrice);
    bankAccount.balance -= Number(productPrice);
    
    productName = prompt("Введите название продукта: ");
    productPrice = prompt("Введите стоимость продукта: ");
    bankAccount.purchases[productName] = Number(productPrice);
    bankAccount.balance -= Number(productPrice);
    
    if (bankAccount.balance < 0) {
    alert("Недостаточно средств на счете!");
    } else {
    alert(`Список покупок: ${JSON.stringify(bankAccount.purchases)} Остаток на счете: ${bankAccount.balance}`);
    }

// 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом
// let data = prompt('Введите ваше имя, возраст, профессию, хобби');
// let obj = data.split(' ');

// let obj2 = {};

// obj2.name = obj[0];
// obj2.age = obj[1];
// obj2.profession = obj[2];
// obj2.hobby = obj[3]; 

// console.log(obj2);

// 5. Дан объект: 
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект

// let obj = {
//     username: 'Tom',
//     age: 35,                                   // obj.key == obj[‘key’]
//     work: 'IT',
//     pet: {
//     type: 'Cat',
//     name: 'Barsik',
//     color: 'White',
//     age: 3
//     }
// }
// let auth = prompt();
// switch(auth){
// case 'username':
//     let username = prompt();
//     obj.username = us;
//     break;
// case 'age':
//     let age = prompt();
//     obj.age = age;
//     break; 
// case 'work':
//     let work = prompt();
//     obj.work = work;
//     break;
// case 'type':
//     let type = prompt();
//     obj.pet.type = type;
//     break;
// case 'name':
//     let namepet = prompt();
//     obj.pet.type = namepet;
//     break;
// case 'color':
//     let color = prompt();
//     obj.pet.color = color;
//     break;
// case `pet age`:
//     let age2 = prompt();
//     obj.pet.age = age2;
// }
// console.log(obj);

// 6. Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа

// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
//     }
    
//     let order = prompt('Введите названия продуктов, которые вы хотите приобрести, через запятую:');
//     let orderArr = order.split(',');
    
//     let total = 0;
    
//     if (products.hasOwnProperty(orderArr[0])) {
//     total += products[orderArr[0]];
//     }
//     if (products.hasOwnProperty(orderArr[1])) {
//     total += products[orderArr[1]];
//     }
//     if (products.hasOwnProperty(orderArr[2])) {
//     total += products[orderArr[2]];
//     }
//     if (products.hasOwnProperty(orderArr[3])) {
//     total += products[orderArr[3]];
//     }
//     if (products.hasOwnProperty(orderArr[4])) {
//     total += products[orderArr[4]];
//     }
//     if (products.hasOwnProperty(orderArr[5])) {
//     total += products[orderArr[5]];
//     }
    
//     console.log(`Сумма заказа составит ${total} сом.`);

