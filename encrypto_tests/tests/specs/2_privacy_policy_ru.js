import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Burger_Menu from '../screenobjects/burger_menu'
import Privacy_Policy from '../screenobjects/privacy_policy'




describe('privacy policy 2 ru; Check scrolling page "Privacy Policy"', function(){

    it('PRECONDITION. Register in the application', function(){        


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

    it('STEP 1. Press side menu button', function(){  

        Myportfolio.burger_menu.click()
        
    });  

    it('STEP 2. Click the "Политика конфиденциальности" section in the sidebar', function(){  

        const text_privacy_policy = 'Политика конфиденциальности'
        const attr_privacy_policy= Burger_Menu.privacy_policy_ru.getAttribute('content-desc')
        expect(text_privacy_policy).toBe(attr_privacy_policy)

        Burger_Menu.privacy_policy_ru.click()
        
    });  

    it('STEP 3. Scroll page', function(){  

        Privacy_Policy.introdaction_text.waitUntil(async function () {
            return this.getAttribute('text') === 'Introduction'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 10s'
        });

        driver.touchPerform([
            { action: 'press', options: { x: 830, y: 1220 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 800, y: 388 }},
            { action: 'release' }
        ]);
        
    });  

    it('EXPECTED RESULT. The "Политика конфиденциальности" window opensin the Header of the page is displayed: - screen title "Политика конфиденциальности"; - button [<]. The main part of the screen displays: - information about "Политика конфиденциальности"', function(){  
        
        const text_privacy_policy = 'Политика конфиденциальности'
        const attr_privacy_policy= Privacy_Policy.header_ru.getAttribute('content-desc')
        expect(text_privacy_policy).toBe(attr_privacy_policy)

        const attr_back_btn = Privacy_Policy.back_btn.getAttribute('displayed')
        expect(attr_back_btn).toBe('true')


        Privacy_Policy.contact_us.waitForDisplayed({timeout:10000})
        const contact_us_text = 'Contact Us'
        const attr_contact_us = Privacy_Policy.contact_us.getAttribute('text')
        expect(contact_us_text).toBe(attr_contact_us)
    });  

    

});