import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'

describe('onboarding screen test 3 ru; Проверить работу радиокнопки "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)" без установки  в настройках телефона  отпечатка пальца  и FaseID и без нажатия кнопки продолжить на экране "Безопасность"', function(){

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
        
        const attr_1 = Security_Info.checkbox_1_ru.getAttribute('checked')
        expect(attr_1).toBe('true')
       
    });

    it('EXPECTED RESULT. В header: - название экрана "Безопасность"; Текст: - "В качестве дополнительном меры  безопасности Вы можете зашифровать данные с помощью собственного пароля, что бы убедится, что данные защищены, даже если устройство потеряно или украдено"; - "Выберите меру безопасности: "Радиокнопки:- "Мастер-пароль и отпечаток пальца/Face ID(рекомендуется)" с установленным чек боксом по молчанию; - "Только мастер пароль (наиболее безопасный)";- "Только отпечаток пальца/FaceID(компромиссный вариант)"; - "Ничего, мне не о чем беспокоится " на экране "Безопастность"; Кнопка:- [Далее] ', function(){        

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_text1 = 'В качестве дополнительной меры безопасности Вы можете зашифровать данные с помощью собственного мастер-пароля, чтобы убедиться, что данные защищены, даже если устройство потеряно или украдено.'
        const attr_text1 = Security_Info.text1_ru.getAttribute('content-desc')
        expect(attr_text1).toBe(text_text1)

        const text_text2 = 'Выберите меру безопасности:'
        const attr_text2 = Security_Info.text2_ru.getAttribute('content-desc')
        expect(attr_text2).toBe(text_text2)

        const text_chkbox_1 = 'Мастер-пароль и отпечаток пальца/FaceID (рекомендуется)'
        const attr_chkbox1 = Security_Info.checkbox_1_ru.getAttribute('content-desc') 
        const attr_1 = Security_Info.checkbox_1_ru.getAttribute('checked')
        expect(attr_chkbox1).toBe(text_chkbox_1)
        expect(attr_1).toBe('true')
        
        const text_chkbox_2 = 'Только мастер-пароль (наиболее безопасный)'
        const attr_chkbox2 = Security_Info.checkbox_2_ru.getAttribute('content-desc') 
        expect(attr_chkbox2).toBe(text_chkbox_2)

        const text_chkbox_3 = 'Только отпечаток пальца/FaceID (компромиссный вариант)'
        const attr_chkbox3 = Security_Info.checkbox_3_ru.getAttribute('content-desc') 
        expect(attr_chkbox3).toBe(text_chkbox_3)

        const text_chkbox_4 = 'Ничего, мне не о чем беспокоиться'
        const attr_chkbox4 = Security_Info.checkbox_4_ru.getAttribute('content-desc') 
        expect(attr_chkbox4).toBe(text_chkbox_4)

        const text_next_btn = 'Далее'
        const attr_next_btn = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
    });
});