import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Burger_Menu from '../screenobjects/burger_menu'
import ChoosePortfolio from '../screenobjects/choose_portfolio_menu'





describe('lock test 1 en; Check if the application works correctly when pressing the [Lock] button', function(){

    it('PRECONDITION. Register in the application', function(){        

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

    it('STEP 1. Press side menu button', function(){  

        Myportfolio.burger_menu.click()
        
    });  

    it('STEP 2. Click the "Lock" section in the sidebar', function(){  

        const text_lock = 'Lock'
        const attr_lock = Burger_Menu.lock_en.getAttribute('content-desc')
        expect(text_lock).toBe(attr_lock)

        Burger_Menu.lock_en.click()
        
    });  

    it('EXPECTED RESULT. The "About" window opensin the Header of the page is displayed: - screen title "About"; - button [<]. The main part of the screen displays: - application logo; -app name; - text "Platform"; - platform icon; - platform name; - active link encryptoportfolio.com', function(){  

        
        const choose_portfolio = 'Choose Portfolio:'
        const attr_choose_portfolio = ChoosePortfolio.header_en.getAttribute('content-desc')
        expect(choose_portfolio).toBe(attr_choose_portfolio)

        ChoosePortfolio.show_menu.click()
        

        const username = 'Dmitriy Kasinskiy'
        const attr_username = ChoosePortfolio.username.getAttribute('content-desc')
        expect(username).toBe(attr_username)
        ChoosePortfolio.username.click()


        const password = 'Password'
        const attr_password = ChoosePortfolio.password_en.getAttribute('text')
        expect(password).toBe(attr_password)
        ChoosePortfolio.password_en.click()
        ChoosePortfolio.password_en.setValue(1234)


        const ok_btn = 'Ok'
        const attr_ok_btn = ChoosePortfolio.ok_btn_en.getAttribute('content-desc')
        expect(ok_btn).toBe(attr_ok_btn)
        ChoosePortfolio.ok_btn_en.click()
    });
    

});