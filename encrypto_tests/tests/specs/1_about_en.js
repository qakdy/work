import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Burger_Menu from '../screenobjects/burger_menu'
import About from '../screenobjects/about'



describe('about test 1 en; Check the opening of the "About us" screen', function(){

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

    it('STEP 2. Click the "About" section in the sidebar', function(){  

        const text_about = 'About'
        const attr_about = Burger_Menu.about_en.getAttribute('content-desc')
        expect(text_about).toBe(attr_about)

        Burger_Menu.about_en.click()
        
    });  

    it('EXPECTED RESULT. The "About" window opensin the Header of the page is displayed: - screen title "About"; - button [<]. The main part of the screen displays: - application logo; -app name; - text "Platform"; - platform icon; - platform name; - active link encryptoportfolio.com', function(){  

        const about_text = "About"
        const attr_about = About.header_en.getAttribute('content-desc')
        expect(about_text).toBe(attr_about)

        const attr_back_btn = About.back_bnt.getAttribute('displayed')
        expect(attr_back_btn).toBe('true')

        const attr_logo_app = About.logo_app.getAttribute('displayed')
        expect(attr_logo_app).toBe('true')

        const encrypto_text = "EnCrypto"
        const attr_encrypto = About.encrypto.getAttribute('content-desc')
        expect(encrypto_text).toBe(attr_encrypto)

        const platform_text = 'Platform'
        const attr_platform = About.platform_en.getAttribute('content-desc')
        expect(platform_text).toBe(attr_platform)

        const attr_android = About.logo_android.getAttribute('displayed')
        expect(attr_android).toBe('true')

        const android_text = 'Android'
        const attr_android_text = About.android.getAttribute('content-desc')
        expect(android_text).toBe(attr_android_text)

        const link_text = 'encryptoportfolio.com'
        const attr_link_text = About.link.getAttribute('content-desc')
        expect(link_text).toBe(attr_link_text)
        const attr_link_clk = About.link.getAttribute('clickable')
        expect(attr_link_clk).toBe('true')
        
    });  

    

});