import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Add_Coin from '../screenobjects/add_coin'
import Details from '../screenobjects/details'
import Transaction from '../screenobjects/transaction'
import AddTransaction from '../screenobjects/add_a_transaction'


describe('coin transaction in 6 ru; Check the creation of an In-Buy transaction with the current value of the coin and the choice of wallet from the drop-down menu when canceling the transaction', function(){

    it('PRECONDITION. User registration ', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_2 = 'Только мастер-пароль (наиболее безопасный)';
        const attr_2_text = Security_Info.checkbox_2_ru.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_ru.click()
        const attr_2 = Security_Info.checkbox_2_ru.getAttribute('checked')
        expect(attr_2).toBe('true')
        
        const text_next_btn_1 = 'Далее'
        const attr_next_btn_1 = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_ru.click()
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio.click()
        Create_Portfolio.myportfolio.setValue('Дмитрий Касинский')

        const text_master_password = 'Основной пароль'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        Create_Portfolio.password_1.click()
        Create_Portfolio.password_1.setValue(1234)
    
        const text_confirm_password = 'Подтвердить пароль'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)
        Create_Portfolio.password_2.click()
        Create_Portfolio.password_2.setValue(1234)

        driver.pressKeyCode(66)

        const myportfolio_username = 'Дмитрий Касинский'
        const attr_myportfolio_username = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        Myportfolio.plus.click()


    })

    it('PRECONDITION. Add coin', function(){   

        const add_coin = 'Добавьте монету'
        const attr_add_coin = Add_Coin.header_ru.getAttribute('content-desc')
        expect(add_coin).toBe(attr_add_coin)
       
       
        Add_Coin.enter_coin_ru.waitUntil(async function () {
            return this.getAttribute('text') === 'Введите монету'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 10s'
        });

        driver.touchAction({
            action: 'tap',
            x: 567,
            y: 577
        })
    })

    it('PRECONDITION. Add coin', function(){   
        
        Details.header_ru.waitForDisplayed()

        const deatils = 'Детали'
        const attr_details = Details.header_ru.getAttribute('content-desc')
        expect(deatils).toBe(attr_details)

        const btc = 'Bitcoin'
        const attr_btc = Details.bitcoin.getAttribute('content-desc')
        expect(btc).toBe(attr_btc)

        const add = 'Добавить'
        const attr_add = Details.add_btn_ru.getAttribute('content-desc')
        expect(add).toBe(attr_add)
        Details.add_btn_ru.click()

    });

    it('PRECONDITION. Add coin', function(){  

        const myportfolio_username = 'Дмитрий Касинский'
        const attr_myportfolio_username = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)


        driver.touchAction({
            action: 'tap',
            x: 527,
            y: 643
        })
    });

    it('STEP 1. Press the [+] button at the bottom of the page', function(){  

        const transaction_btc = 'Tранзакция BTC'
        const attr_transaction_btc = Transaction.header_ru_btc.getAttribute('content-desc')
        expect(transaction_btc).toBe(attr_transaction_btc)

        Transaction.plus.click()
    });

    it('STEP 2. From the first drop-down menu select "Входящее"', function(){  

        AddTransaction.header_ru.waitForDisplayed()

        const add_transaction_btc = 'Добавить транзакцию'
        const attr_add_transaction_btc = AddTransaction.header_ru.getAttribute('content-desc')
        expect(add_transaction_btc).toBe(attr_add_transaction_btc)


        driver.touchAction({
             action: 'tap',
             x: 962,
             y: 664
         })

        const text_in = 'Входящее'
        const attr_text_in = AddTransaction.in_ru.getAttribute('content-desc')
        expect(text_in).toBe(attr_text_in)

        AddTransaction.in_ru.click()

    
    });

    it('STEP 3. Select "Покупка" from the second drop-down list', function(){ 

        driver.touchAction({
            action: 'tap',
            x: 957,
            y: 954
        })

       const text_buy = 'Покупка'
       const attr_text_buy = AddTransaction.buy_ru.getAttribute('content-desc')
       expect(text_buy).toBe(attr_text_buy)

       AddTransaction.buy_ru.click()
    })

    it('STEP 4. Enter in the field "Количество" entered the number of coins', function(){ 

        AddTransaction.quantity_btc.click()
        AddTransaction.quantity_btc.setValue(5)

        driver.pressKeyCode(66)

        const text_quantity = '5, Количество'
        const attr_text_quantity = AddTransaction.quantity_btc.getAttribute('text')
        expect(text_quantity).toBe(attr_text_quantity)


    })

  

    it('STEP 5. Select Wallet from the drop down list', function(){ 

        AddTransaction.wallet_dropdown_ru.click()
        AddTransaction.metamask.click()

        const wallet_text = 'Metamask, Кошелек / Биржа'
        const attr_wallet_text = AddTransaction.wallet_exchange.getAttribute('text')
        expect(wallet_text).toBe(attr_wallet_text)



    })  

    it('STEP 6. In the date field, select the current or past date', function(){ 
        

        driver.touchAction({
            action: 'tap',
            x: 999,
            y: 1265
        })

    })
    
    it('STEP 7. Click the [OK] button on the calendar', function(){ 

        
        AddTransaction.ok_btn_calendar_btc_ru.click()

    })   


    it('STEP 8. Press the [Отмена] button', function(){ 

        AddTransaction.cancel_ru.click()

    })  

    it('EXPECTED RESULT. The user goes to the "Transaction" screen. The transaction has not been added and is not displayed in the list of all transactions on the page. Also, the information in the static top of the page has remained unchanged. In the profile, the balance of the wallet has not changed', function(){ 

        const transaction_btc = 'Tранзакция BTC'
        const attr_transaction_btc = Transaction.header_ru_btc.getAttribute('content-desc')
        expect(transaction_btc).toBe(attr_transaction_btc)

        const attr_plus = Transaction.plus.getAttribute('displayed')
        expect(attr_plus).toBe('true')

        const null_btc_text = '0.0 BTC'
        const attr_null_btc =Transaction.null_btc.getAttribute('content-desc')
        expect(null_btc_text).toBe(attr_null_btc)

        const null_usd_text = '0.0 USD'
        const attr_null_usd =Transaction.null_usd.getAttribute('content-desc')
        expect(null_usd_text).toBe(attr_null_usd)
        
        const attr_back_btn = Transaction.back_btn.getAttribute('displayed')
        expect(attr_back_btn).toBe('true')


    }) 

});