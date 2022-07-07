import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 2 en; Проверить работу радиокнопки "Master password and Fingerprint/FaceID (recommended)" без установки  в настройках телефона  отпечатка пальца  и FaseID', function(){


    it('STEP 1. Нажать кнопку [Next] на экране "Small_Intro"', function(){        

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

        Security_Info.next_btn_en.click()

        
    });

    it('EXPECTED RESULT. При нажатии кнопки [Next] в нижней части окна "Security Intro" не переходит на экран "Create Portfolio"', function(){        

        expect(Create_Portfolio.header_en).not.toBeDisplayed()
    });
});