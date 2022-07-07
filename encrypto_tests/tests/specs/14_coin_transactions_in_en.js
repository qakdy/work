import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Add_Coin from '../screenobjects/add_coin'
import Details from '../screenobjects/details'
import Transaction from '../screenobjects/transaction'
import AddTransaction from '../screenobjects/add_a_transaction'


describe('coin transaction in 14 en; Check the creation of an In-Mining transaction with an empty "Amount" field, choosing a wallet from the drop-down list and manually entering the "USD" rate', function(){

    it('PRECONDITION. User registration ', function(){        

        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_en.click()

        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_2 = 'Master password only (the most secure)';
        const attr_2_text = Security_Info.checkbox_2_en.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_en.click()
        const attr_2 = Security_Info.checkbox_2_en.getAttribute('checked')
        expect(attr_2).toBe('true')
        
        const text_next_btn_1 = 'Next'
        const attr_next_btn_1 = Security_Info.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_en.click()
    
        const text_create_portfolio = 'Create portfolio'
        const attr_create_portfolio = Create_Portfolio.header_en.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio.click()
        Create_Portfolio.myportfolio.setValue('Dmitriy Kasinskiy')

        const text_master_password = 'master password'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        Create_Portfolio.password_1.click()
        Create_Portfolio.password_1.setValue(1234)
    
        const text_confirm_password = 'confirm password'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)
        Create_Portfolio.password_2.click()
        Create_Portfolio.password_2.setValue(1234)

        const text_create_btn = 'Create'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_en.click();

        const myportfolio_username = 'Dmitriy Kasinskiy'
        const attr_myportfolio_username = Myportfolio.fullname_header_en.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        Myportfolio.plus.click()

    })

    it('PRECONDITION. Add coin', function(){   

        const add_coin = 'Add Coin'
        const attr_add_coin = Add_Coin.header_en.getAttribute('content-desc')
        expect(add_coin).toBe(attr_add_coin)
       
       
        Add_Coin.enter_coin_en.waitUntil(async function () {
            return this.getAttribute('text') === 'Enter Coin'
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
        
        Details.header_en.waitForDisplayed()

        const deatils = 'Details'
        const attr_details = Details.header_en.getAttribute('content-desc')
        expect(deatils).toBe(attr_details)

        const btc = 'Bitcoin'
        const attr_btc = Details.bitcoin.getAttribute('content-desc')
        expect(btc).toBe(attr_btc)

        const add = 'Add'
        const attr_add = Details.add_btn_en.getAttribute('content-desc')
        expect(add).toBe(attr_add)
        Details.add_btn_en.click()
    });

    it('PRECONDITION. Add coin', function(){  

        const myportfolio_username = 'Dmitriy Kasinskiy'
        const attr_myportfolio_username = Myportfolio.fullname_header_en.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)


        driver.touchAction({
            action: 'tap',
            x: 527,
            y: 643
        })
    });

    it('STEP 1. Press the [+] button at the bottom of the page', function(){  

        const transaction_btc = 'Transaction BTC'
        const attr_transaction_btc = Transaction.header_en_btc.getAttribute('content-desc')
        expect(transaction_btc).toBe(attr_transaction_btc)

        Transaction.plus.click()
    });

    it('STEP 2. From the first drop-down menu select "In"', function(){  

        const add_transaction_btc = 'Add a transaction'
        const attr_add_transaction_btc = AddTransaction.header_en.getAttribute('content-desc')
        expect(add_transaction_btc).toBe(attr_add_transaction_btc)


        driver.touchAction({
            action: 'tap',
            x: 957,
            y: 604
        })

       const text_in = 'In'
       const attr_text_in = AddTransaction.in.getAttribute('content-desc')
       expect(text_in).toBe(attr_text_in)

       AddTransaction.in.click()

    
    });


    it('STEP 3. Select "Mining" from the second drop-down list', function(){ 

        driver.touchAction({
            action: 'tap',
            x: 957,
            y: 954
        })

        const text_mining = 'Mining'
        const attr_text_mining = AddTransaction.mining.getAttribute('content-desc')
        expect(text_mining).toBe(attr_text_mining)
 
        AddTransaction.mining.click()
    })
  
  
    it('STEP 4. In the date field, select the current or past date', function(){ 
        

        driver.touchAction({
            action: 'tap',
            x: 962,
            y: 1459
        })

    })
    
    it('STEP 5. Click the [OK] button on the calendar', function(){ 

        
        AddTransaction.ok_btn_calendar_btc.click()

    })   
    
    it('STEP 6. Select Wallet from the drop down list', function(){ 

        

        driver.touchPerform([
            { action: 'press', options: { x: 965, y: 1220 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 800, y: 388 }},
            { action: 'release' }
        ]);

        AddTransaction.wallet_dropdown.click()
        AddTransaction.metamask.click()

        const wallet_text = 'Metamask, Wallet / Exchange'
        const attr_wallet_text = AddTransaction.wallet_exchange.getAttribute('text')
        expect(wallet_text).toBe(attr_wallet_text)

    })  

    it('STEP 7. Press the [Save] button', function(){ 

        AddTransaction.save.click()

    })  

    it('EXPECTED RESULT. The transaction has not been added and is not displayed in the list of all transactions on the page. Below the "quantity" field, an informational message is displayed with the red text "Please enter the quantity" .', function(){ 

        const add_transaction_btc = 'Add a transaction'
        const attr_add_transaction_btc = AddTransaction.header_en.getAttribute('content-desc')
        expect(add_transaction_btc).toBe(attr_add_transaction_btc)

        const usd_red_message_1 = 'Please Enter quantity'
        const attr_usd_red_message_1 = AddTransaction.red_message_1.getAttribute('content-desc')
        expect(usd_red_message_1).toBe(attr_usd_red_message_1)

        AddTransaction.back_btn.click()

        const transaction_btc = 'Transaction BTC'
        const attr_transaction_btc = Transaction.header_en_btc.getAttribute('content-desc')
        expect(transaction_btc).toBe(attr_transaction_btc)

        const null_btc_text_tr = '0.0 BTC'
        const attr_null_btc_tr = Transaction.null_btc.getAttribute('content-desc')
        expect(null_btc_text_tr).toBe(attr_null_btc_tr)

        const null_usd_text_tr = '0.0 USD'
        const attr_null_usd_tr =Transaction.null_usd.getAttribute('content-desc')
        expect(null_usd_text_tr).toBe(attr_null_usd_tr)


    }) 

});