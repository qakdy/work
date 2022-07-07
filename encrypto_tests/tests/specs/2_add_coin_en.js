import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Add_Coin from '../screenobjects/add_coin'
import Details from '../screenobjects/details'


describe('add coin test 2 en; View added coins in "Profile" when scrolling through the profile without nearby dots on the "Details" screen', function(){

    it('PRECONDITION. The user is authorized, On the "Profile" page, The coin is not previously added to the profile', function(){        

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

    });

    it('STEP 1. Click button [+] в Header', function(){

        Myportfolio.plus.click()
        
    }); 

    it('STEP 2. Scroll to desired coin', function(){

        const add_coin = 'Add Coin'
        const attr_add_coin = Add_Coin.header_en.getAttribute('content-desc')
        expect(add_coin).toBe(attr_add_coin)

        Add_Coin.enter_coin_en.waitUntil(async function () {
            return this.getAttribute('text') === 'Enter Coin'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 10s'
        });

        driver.touchPerform([
            { action: 'press', options: { x: 534, y: 1320 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 500, y: 1080 }},
            { action: 'release' }
        ]);
        
    }); 


    it('STEP 3. Click on the selected coin' , function(){

        driver.touchAction({
            action: 'tap',
            x: 559,
            y: 667
        })

        driver.touchAction({
            action: 'tap',
            x: 559,
            y: 667
        })
        
    }); 


    it('EXPECTED RESULT. The user remains in the "Details" window and is not redirected to the "Profile" page' , function(){
       
        const deatils = 'Details'
        const attr_details = Details.header_en.getAttribute('content-desc')
        expect(deatils).toBe(attr_details) 

    }); 
});