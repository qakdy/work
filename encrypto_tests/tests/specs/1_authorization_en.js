import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import MainMenuDevice from '../screenobjects/main_menu_device'
import ChoosePortfolio from '../screenobjects/choose_portfolio_menu'
import Myportfolio from '../screenobjects/myportfolio'

describe('authorization test 1 en; Проверить вход в  профайл, выбранный из выпадающего списка и созданный с  помощью "Master password only (the most secure)" с валидным паролем', function(){

    it('PRECONDITION. Пользователь создал профайл с помощью  "Master password only (the most secure)". Далее закрыл приложение и открыл его снова', function(){        

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

        const text_create_btn = 'Сreate'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_en.click();

        const myportfolio_username = 'Dmitriy Kasinskiy'
        const attr_myportfolio_username = Myportfolio.fullname_header_en.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        driver.closeApp()
        MainMenuDevice.encrypto_icon.click()
        



    });

    it('STEP 1. Выбрать профайл из выпадающего меню созданный с помощью  "Master password only (the most secure)" ', function(){
        
        

        
        
        const choose_portfolio = 'Choose Portfolio:'
        const attr_choose_portfolio = ChoosePortfolio.header_en.getAttribute('content-desc')
        expect(choose_portfolio).toBe(attr_choose_portfolio)
        

        ChoosePortfolio.show_menu.click()
        

        const username = 'Dmitriy Kasinskiy'
        const attr_username = ChoosePortfolio.username.getAttribute('content-desc')
        expect(username).toBe(attr_username)
        ChoosePortfolio.username.click()
    }); 

    it('STEP 2. Ввести валидный пароль от данного профайла ', function(){  

        const password = 'Password'
        const attr_password = ChoosePortfolio.password_en.getAttribute('text')
        expect(password).toBe(attr_password)
        ChoosePortfolio.password_en.click()
        ChoosePortfolio.password_en.setValue(1234)

    });  

    it('STEP 3. Нажать кнопку [Ок] на экране выбора профайла', function(){  

        const ok_btn = 'Ok'
        const attr_ok_btn = ChoosePortfolio.ok_btn_en.getAttribute('content-desc')
        expect(ok_btn).toBe(attr_ok_btn)
        ChoosePortfolio.ok_btn_en.click()
    }); 

    it('EXPECTED RESULT. После нажатия кнопки [Ок] на экране выбора профайла пользователь успешно переходит в  портфолио с именем профиля указанным при авторизации', function(){  

        const myportfolio_username = 'Dmitriy Kasinskiy'
        const attr_myportfolio_username = Myportfolio.fullname_header_en.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

    }); 
});