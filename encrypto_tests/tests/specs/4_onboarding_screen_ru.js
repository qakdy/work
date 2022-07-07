import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'


describe('onboarding screen test 4 ru; Проверить работу радиокнопки "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)" с установой  в настройках телефона  отпечатка пальца  и нажатия кнопки продолжить на экране "Безопасность"', function(){

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

    it('STEP 3. Нажать кнопку [Далее] на экране "Безопасность"', function(){        

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const text_next_btn = 'Далее'
        const attr_next_btn = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Security_Info.next_btn_ru.click()
        
        
       
    });

    it('STEP 4. Прикоснуться к сканеру отпечатка пальца  валидным отпечатком, введенным в настройки телефона', function() {        
    
        driver.fingerPrint(1)

    });


    it('EXPECTED RESULT. После прикосновения к сканеру отпечатка пальцев валидным отпечатком пальца, введенным в настройки телефона пользователь переходит на экран "Создать портфолио", где  отображены поля:в header:- Название экрана "Создать портфолио.В основной части экрана:текст:-  "Добро пожаловать"- " Хорошо запомните свой мастер-пароль или запишите его на бумаге и положите его в настоящий сейф. Вашиданные невозможно будет восстановить, если вы забудете или потеряете свой пароль, потому что Ваш пароль является единственным ключом  для расшифровки данных".поля:- "Мое портфолио" - "Основной пароль"- "Подтвердить пароль"кнопка: - [Создать]Курсор по умолчанию устновлен в поле "Основной пароль"  ', function(){        

        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

    });
});