import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('onboarding screen test 11 ru; Проверить переключение радиокнопки  с  "Мастер-пароль и отпечаток пальца/Face ID(рекомендуется)"  на  "Только отпечаток пальца/FaceID(компромиссный вариант)"  с введенным в настройках телефона отпечатком пальцев и его использованием ', function(){

    it('STEP 1. Нажать кнопку [Далее] на экране "Введение"', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()
    });

    it('STEP 2. На экране "Безопасность" радиокнопку по умолчанию на "Мастер-пароль и отпечаток пальца /FaseID (рекомендуется)" переключить на ""Только отпечаток пальца/FaceID(компромиссный вариант)" ', function(){
        
        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)
        
        const attr_1 = Security_Info.checkbox_1_ru.getAttribute('checked')
        expect(attr_1).toBe('true')

        const text_checkbox_3 = 'Только отпечаток пальца/FaceID (компромиссный вариант)';
        const attr_3_text = Security_Info.checkbox_3_ru.getAttribute('content-desc')
        expect(attr_3_text).toBe(text_checkbox_3)
        Security_Info.checkbox_3_ru.click()
        const attr_3 = Security_Info.checkbox_3_ru.getAttribute('checked')
        expect(attr_3).toBe('true')
        
       

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


    it('EXPECTED RESULT.После прикосновения к сканеру отпечатка пальцев валидным отпечатком пальца, введенным в настройки телефона пользователь переходит на экран "Создать портфолио", где отображено: в header:  - название экрана "Создать портфолио.  в основной части экрана: -текст "Добро пожаловать"; - кнопка [Создать]', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_welcome = "Добро пожаловать"
        const attr_welcome = Create_Portfolio.welcome_ru.getAttribute('content-desc')
        expect(attr_welcome).toBe(text_welcome)

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
    });
});