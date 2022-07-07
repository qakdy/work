import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 9 en;  Проверить работу радиокнопки "Master password only (the most secure)" при нажатии кнопки [Next] на экране "Security Intro"', function(){

    it('STEP 1. Нажать кнопку [Next] на экране "Small Intro"', function(){
        
        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
        
        Small_Intro.next_btn_en.click()
    });

    it('STEP 2. На экране "Security Intro" радиокнопку по умолчанию на "Master password and Fingerprint/FaceID (recommended)" переключить на "Master password only (the most secure)" ', function(){
        
        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_chkbox_1 = 'Master password and Fingerprint/FaceID (recommended)'
        const attr_chkbox1 = Security_Info.checkbox_1_en.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_en.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')

        const text_checkbox_2 = 'Master password only (the most secure)';
        const attr_2_text = Security_Info.checkbox_2_en.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_en.click()
        const attr_2 = Security_Info.checkbox_2_en.getAttribute('checked')
        expect(attr_2).toBe('true')
        
       

    });

    it('STEP 3. Нажать кнопку [Next] на экране "Security Intro"', function(){
        
        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_next_btn = 'Next'
        const attr_next_btn = Security_Info.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Security_Info.next_btn_en.click()

    });
    it('EXPECTED RESULT. После нажатия кнопки [Next] на экране "Security Intro" Пользователь переходит на экран  "Create portfolio", где  отображены поля: в header: - Название экрана "Create portfolio". В основной части экрана: текст: -  "Please enter and confirm your master password"; - "Remember your master password by heart or put it down on the paper and put it into the real safe. It is not possible to restore your data if you forgot/lost your password because the data is encrypted and your password is the only key to decrypt the data.". поля: - "My portfolio" - "master password"; - "confirm password". кнопка:- [Create] Курсор по умолчанию устновлен в поле "master password"', function(){
    
        const text_create_portfolio = 'Create portfolio'
        const attr_create_portfolio = Create_Portfolio.header_en.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text1_create_portfolio = 'Please enter and confirm your master password'
        const attr_text1_create_portfolio = Create_Portfolio.text1_en.getAttribute('content-desc')
        expect(attr_text1_create_portfolio).toBe(text1_create_portfolio)

        const text2_create_portfolio = 'Remember your master password by heart or put it down on the paper and put it into the real safe. It is not possible to restore your data if you forgot/lost your password because the data is encrypted and your password is the only key to decrypt the data.'
        const attr_text2_create_portfolio = Create_Portfolio.text2_en.getAttribute('content-desc')
        expect(attr_text2_create_portfolio).toBe(text2_create_portfolio)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)

        const text_master_password = 'master password'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)

        const text_confirm_password = 'confirm password'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)

        const text_create_btn = 'Сreate'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)

    });
});