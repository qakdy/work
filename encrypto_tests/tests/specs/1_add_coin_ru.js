import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Add_Coin from '../screenobjects/add_coin'
import Details from '../screenobjects/details'


describe('add coin test 1 ru; Checking the addition of a coin to the "Profile" in the profile through the search with the application of the [Add] button', function(){

    it('PRECONDITION. The user is authorized, On the "Profile" page, The coin is not previously added to the profile', function(){        

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

        driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1300 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 510, y: 800 }},
            { action: 'release' }
        ]);

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();

        const myportfolio_username = 'Дмитрий Касинский'
        const attr_myportfolio_username = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

    });

    it('STEP 1. Click button [+] в Header', function(){

        Myportfolio.plus.click()
        
    }); 

    it('STEP 2. Enter the full or abbreviated name of the coin in the Enter coin field', function(){

        const add_coin = 'Добавьте монету'
        const attr_add_coin = Add_Coin.header_ru.getAttribute('content-desc')
        expect(add_coin).toBe(attr_add_coin)

        const enter_code = 'Введите монету'
        const attr_enter_code = Add_Coin.enter_coin_ru.getAttribute('text')
        expect(enter_code).toBe(attr_enter_code)
        Add_Coin.enter_coin_ru.setValue('uniswap')

        driver.pressKeyCode(66)

        
    }); 

    it('STEP 3. Click button [Поиск]' , function(){

        Add_Coin.search.click()
        
    }); 

    it('STEP 4. Click on the selected coin' , function(){

        driver.touchAction({
            action: 'tap',
            x: 567,
            y: 577
        })
        
    }); 


    it('STEP 5. Press the [Добавить] button in the "Детали" window' , function(){

        
        const deatils = 'Детали'
        const attr_details = Details.header_ru.getAttribute('content-desc')
        expect(deatils).toBe(attr_details)

        const uniswap = 'Uniswap'
        const attr_uniswap = Details.uniswap.getAttribute('content-desc')
        expect(uniswap).toBe(attr_uniswap)

        const add = 'Добавить'
        const attr_add = Details.add_btn_ru.getAttribute('content-desc')
        expect(add).toBe(attr_add)
        Details.add_btn_ru.click()       
    });

    it('EXPECTED RESULT. Goes to the "Profile" page. The added coin is displayed in the list of coins with zero values: - transferring the cost of transactions for this coin; - number of coins' , function(){
       
        const myportfolio_username = 'Дмитрий Касинский'
        const attr_myportfolio_username = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        
    }); 
});