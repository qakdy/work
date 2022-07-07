import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('registration test 1 ru; Проверить создание портфолио при выборе на онбординг скрин радиокнопку "Только мастер пароль (наиболее безопасный)"с пустыми полями " ', function(){

    it('PRECONDITION. Пользователь прошел онбординг скрин и выбрал на экране безопасность радиокнопку "Только мастер пароль (наиболее безопасный)"', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_2 = 'Только мастер-пароль (наиболее безопасный)';
        const attr_2_text = Security_Info.checkbox_2_ru.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_ru.click()
        const attr_2 = Security_Info.checkbox_2_ru.getAttribute('checked')
        expect(attr_2).toBe('true')
        
        const text_next_btn_1 = 'Далее'
        const attr_next_btn_1 = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_ru.click()

        const text_master_password = 'Основной пароль'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        const attr_master_password_focused = Create_Portfolio.password_1.getAttribute('focused')
        expect(attr_master_password_focused).toBe('true')
        
    
    });
   
    it('STEP 1-2. В поле "Мое портфолио" удалить текст; Поля "Основной пароль", "Подтвердить пароль" оставить пустыми', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio.click()
        Create_Portfolio.myportfolio.clearValue()

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

       
    });

    it('STEP 3. Нажать кнопку [Создать]', function(){

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();
    });

    it('EXPECTED RESULT. Под полем "Мое порфтолио"отображается информационное сообщение красным цветом" Пожалуйста, введите имя".  Под полем "Основной пароль"отображается информационное сообщение красным цветом" Пожалуйста,  введите пароль". Под полем "Подтвердите  пароль"  отображается информационное сообщение  красным цветом "Пожалуйста,  подтвердите пароль"', function(){

        const red_text1 = 'Пожалуйста, введите имя'
        const attr_red_text1 = Create_Portfolio.red_text1_ru.getAttribute('content-desc')
        expect(red_text1).toBe(attr_red_text1)

        const red_text2 = 'Пожалуйста, введите пароль'
        const attr_red_text2 = Create_Portfolio.red_text2_ru.getAttribute('content-desc')
        expect(red_text2).toBe(attr_red_text2)

        const red_text3 = 'Пожалуйста, введите подтверждение пароля'
        const attr_red_text3 = Create_Portfolio.red_text3_ru.getAttribute('content-desc')
        expect(red_text3).toBe(attr_red_text3)
    });
});