import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'

describe('onboarding screen test 3 en; Проверить работу радиокнопки "Master password and Fingerprint/FaceID (recommended)" без установки  в настройках телефона  отпечатка пальца  и FaseID и без нажатия кнопки продолжить на экране "Security Intro"', function(){

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
        
        const attr_1 = Security_Info.checkbox_1_en.getAttribute('checked')
        expect(attr_1).toBe('true')
       
    });

    it('EXPECTED RESULT. В header: - название экрана "Security Intro"; Текст: - "As an additional security measure, you can encrypt the data with your own master password to make sure that your data is secured, even if your device is lost or stolen."; - "Select security measure: "Радиокнопки:- "Master password and Fingerprint/FaceID (recommended)" с установленным чекбоксом по молчанию; - "Master password only (the most secure)";- "Fingerprint/FaceID (trade-off option)"; - "I have nothing to worry about " на экране "Security Intro"; Кнопка:- [Next] ', function(){        

        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_text1 = 'As an additional security measure, you can encrypt the data with your own master password to make sure that your data is secured, even if your device is lost or stolen.'
        const attr_text1 = Security_Info.text1_en.getAttribute('content-desc')
        expect(attr_text1).toBe(text_text1)

        const text_text2 = 'Select security measure:'
        const attr_text2 = Security_Info.text2_en.getAttribute('content-desc')
        expect(attr_text2).toBe(text_text2)

        const text_chkbox_1 = 'Master password and Fingerprint/FaceID (recommended)'
        const attr_chkbox1 = Security_Info.checkbox_1_en.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_en.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')
        
        const text_chkbox_2 = 'Master password only (the most secure)'
        const attr_chkbox2 = Security_Info.checkbox_2_en.getAttribute('content-desc') 
        expect(attr_chkbox2).toBe(text_chkbox_2)

        const text_chkbox_3 = 'Fingerprint/FaceID (trade-off option)'
        const attr_chkbox3 = Security_Info.checkbox_3_en.getAttribute('content-desc') 
        expect(attr_chkbox3).toBe(text_chkbox_3)

        const text_chkbox_4 = 'I have nothing to worry about'
        const attr_chkbox4 = Security_Info.checkbox_4_en.getAttribute('content-desc') 
        expect(attr_chkbox4).toBe(text_chkbox_4)

        const text_next_btn = 'Next'
        const attr_next_btn = Security_Info.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
    });
});