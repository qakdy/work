import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'


describe('onboarding screen test 5 en; Проверить работу радиокнопки "Master password and Fingerprint/FaceID (recommended)" с установой  в настройках телефона  отпечатка пальца  и нажатия кнопки продолжить на экране "Security Intro". При сканировании НЕвалидного отпечатка пальца', function(){

    it('STEP 1. Нажать кнопку [Next] на экране "Small Intro"', function(){
        
        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_en.click()
        
    });

    it('STEP 2. На экране "Security Intro" радиокнопку оставить по умолчанию на "Master password and Fingerprint/FaceID (recommended)"', function(){        

        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_chkbox_1 = 'Master password and Fingerprint/FaceID (recommended)'
        const attr_chkbox1 = Security_Info.checkbox_1_en.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_en.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')
       
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
    it('STEP 4. Прикоснуться к сканеру отпечатка пальца  НЕвалидным отпечатком,  НЕ введенным в настройки телефона', function() {        
    
        driver.fingerPrint(2)

    });


    it('EXPECTED RESULT. После прикосновения к сканеру отпечатка пальцев  НЕвалидным отпечатком пальца, НЕ введенным в настройки телефона. Не осуществляется переход на экран "Create portfolio"', function(){        

        expect(Create_Portfolio.header_en).not.toBeDisplayed()

    });
});