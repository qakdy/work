import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 9 ru; Проверить работу радиокнопки "Только мастер пароль (наиболее безопасный)" при нажатии кнопки [Далее] на экране "Безопасность"', function(){

    it('STEP 1. Нажать кнопку [Далее] на экране "Введение"', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()
    });

    it('STEP 2. На экране "Безопасность" радиокнопку по умолчанию на "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)" переключить на "Только мастер пароль (наиболее безопасный)" ', function(){
        
        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const attr_1 = Security_Info.checkbox_1_ru.getAttribute('checked')
        expect(attr_1).toBe('true')

        const text_checkbox_2 = 'Только мастер-пароль (наиболее безопасный)';
        const attr_2_text = Security_Info.checkbox_2_ru.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_ru.click()
        const attr_2 = Security_Info.checkbox_2_ru.getAttribute('checked')
        expect(attr_2).toBe('true')
        
       

    });

    it('STEP 3. Нажать кнопку [Далее] на экране "Безопасность"', function(){
        
        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_next_btn = 'Далее'
        const attr_next_btn = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Security_Info.next_btn_ru.click()

    });
    it('EXPECTED RESULT. После нажатия кнопки [Далее] на экране "Безопасность" Пользователь переходит на экран  "Создать портфолио", где  отображены поля: в header: - Название экрана ""Создать портфолио. В основной части экрана: текст: -  "Пожалуйста, введите и подтвердите мастер-пароль"; - "Хорошо запомните свой мастер-пароль или запишите его на бумаге и положите его в настоящий сейф. Вашиданные невозможно будет восстановить, если вы забудете или потеряете свой пароль, потому что Ваш пароль является единственным ключом  для расшифровки данных". поля: - "Мое портфолио" - "Основной пароль"; - "Подтвердить пароль". кнопка:- [Создать]Курсор по умолчанию устновлен в поле "Основной пароль"', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text1_create_portfolio = 'Пожалуйста, введите и подтвердите мастер-пароль'
        const attr_text1_create_portfolio = Create_Portfolio.text1_ru.getAttribute('content-desc')
        expect(attr_text1_create_portfolio).toBe(text1_create_portfolio)

        const text2_create_portfolio = 'Хорошо запомните свой мастер-пароль или запишите его на бумаге и положите в настоящий сейф. Ваши данные невозможно будет восстановить, если вы забудете или потеряете свой пароль, потому что Ваш пароль является единственным ключом для расшифровки данных.'
        const attr_text2_create_portfolio = Create_Portfolio.text2_ru.getAttribute('content-desc')
        expect(attr_text2_create_portfolio).toBe(text2_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)

        const text_master_password = 'Основной пароль'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)

        const text_confirm_password = 'Подтвердить пароль'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)

        driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1300 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 510, y: 800 }},
            { action: 'release' }
        ]);

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)

    });
});