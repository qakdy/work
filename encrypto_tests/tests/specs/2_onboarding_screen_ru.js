import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 2 ru; Проверить работу радиокнопки "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)" без установки  в настройках телефона  отпечатка пальца  и FaseID', function(){


    it('STEP 1. Нажать кнопку [Далее] на экране "Введение"', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()
    });

    it('STEP 2. На экране "Безопасность" радиокнопку оставить по умолчанию на "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)"', function(){        

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_chkbox_1 = 'Мастер-пароль и отпечаток пальца/FaceID (рекомендуется)'
        const attr_chkbox1 = Security_Info.checkbox_1_ru.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_ru.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')

        Security_Info.next_btn_ru.click()

        
    });

    it('EXPECTED RESULT. При нажатии кнопки [Далее] в нижней части окна "Безопасность" не переходит на экран "Создать портфолио"', function(){        

        expect(Create_Portfolio.header_ru).not.toBeDisplayed()
    });
});