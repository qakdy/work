import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Add_Coin from '../screenobjects/add_coin'
import Details from '../screenobjects/details'


describe('add coin test 1 en; Проверить добавлление монеты в "Profile"  в профайл через поиск с нажатием кнопки [Add]', function(){

    it('PRECONDITION. Пользователь авторизован, Находится на странице "Профиль", Монета предварительно не добавлена в профиль', function(){        

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

    it('STEP 1. Нажать кнопку [+] в Header', function(){

        Myportfolio.plus.click()
        
    }); 

    it('STEP 2. Ввести полное или сокращенное название монеты в поле Add Coin', function(){

        const add_coin = 'Add Coin'
        const attr_add_coin = Add_Coin.header_en.getAttribute('content-desc')
        expect(add_coin).toBe(attr_add_coin)

        const enter_code = 'Enter Coin'
        const attr_enter_code = Add_Coin.enter_coin_en.getAttribute('text')
        expect(enter_code).toBe(attr_enter_code)
        Add_Coin.enter_coin_en.setValue('uniswap')

        driver.pressKeyCode(66)

        
    }); 

    it('STEP 3. Нажать кнопку [Поиск]' , function(){

        Add_Coin.search.click()
        
    }); 

    it('STEP 4. Нажать на выбранную монету' , function(){

        driver.touchAction({
            action: 'tap',
            x: 567,
            y: 577
        })
        
    }); 


    it('STEP 5. Нажать кнопку [Add] в окне "Details"' , function(){

        
        const deatils = 'Details'
        const attr_details = Details.header_en.getAttribute('content-desc')
        expect(deatils).toBe(attr_details)

        const uniswap = 'Uniswap'
        const attr_uniswap = Details.uniswap.getAttribute('content-desc')
        expect(uniswap).toBe(attr_uniswap)

        const add = 'Add'
        const attr_add = Details.add_btn_en.getAttribute('content-desc')
        expect(add).toBe(attr_add)
        Details.add_btn_en.click()        
    });

    it('EXPECTED RESULT. Осуществляется переход на страницу "Profile". Добавленная монета отображается в списке монет с нулевыми значениями: - перевода стоимости транзакций по данной монете; - количество монет' , function(){
       
        const myportfolio_username = 'Dmitriy Kasinskiy'
        const attr_myportfolio_username = Myportfolio.fullname_header_en.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        
    }); 
});