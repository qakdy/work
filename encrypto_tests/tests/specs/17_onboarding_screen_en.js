import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 17 en; Проверить работу радиокнопки "I have nothing to worry about"', function(){

    it('STEP 1. Click on button [Next] on screen Small Intro', function(){
        
        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
        
        Small_Intro.next_btn_en.click()
    });

    it('STEP 2. На экране "Security Intro" радиокнопку по умолчанию на "Master password and Fingerprint/FaceID (recommended)" переключить на "I have nothing to worry about"', function(){
        
        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_chkbox_1 = 'Master password and Fingerprint/FaceID (recommended)'
        const attr_chkbox1 = Security_Info.checkbox_1_en.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_en.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')

        const text_checkbox_4 = 'I have nothing to worry about';
        const attr_4_text = Security_Info.checkbox_4_en.getAttribute('content-desc')
        expect(attr_4_text).toBe(text_checkbox_4)
        Security_Info.checkbox_4_en.click()
        const attr_4 = Security_Info.checkbox_4_en.getAttribute('checked')
        expect(attr_4).toBe('true')
        

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

    it('EXPECTED RESULT.После нажатия на  кнопку [Next] пользователь переходит на экран "Create portfolio", где отображено: в header:  - название экрана "Craete portfolio". в основной части экрана: - "Welcome";  -поле "My portfolio" с физическим указанием имени поля- кнопка [Create]', function(){
    
        const text_create_portfolio = 'Create portfolio'
        const attr_create_portfolio = Create_Portfolio.header_en.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_welcome = "Welcome"
        const attr_welcome = Create_Portfolio.welcome_en.getAttribute('content-desc')
        expect(attr_welcome).toBe(text_welcome)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const attr_my_portfolio = Create_Portfolio.myportfolio_4_en.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)

        const text_create_btn = 'Create'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
    });
});