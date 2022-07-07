import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'



describe('registration test 11 ru; Check the creation of a portfolio when choosing on the onboarding screen the radio button "Мастер-пароль и отпечаток пальца/FaceID (рекомендуется)" or "Только мастер-пароль (наиболее безопасный)" with the fields "Основной пароль" and "Подтвердить пароль" filled in with different data and the Changed field "Мое портфолио"', function(){

    it('PRECONDITION. The user went through the onboarding screen and selected on the security screen the radio button "Только мастер-пароль (наиболее безопасный)"; By default, the cursor is set in the "Основной пароль" field, the keyboard is activated"', function(){        

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
   
    it('STEP 1. Edit "Мое портфолио" field data"  ', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio.click()
        Create_Portfolio.myportfolio.clearValue()
        Create_Portfolio.myportfolio.setValue('Дмитрий Касинский')
       
    });

    it('STEP 2. Fill in the field "Основной пароль"', function(){

        const text_master_password = 'Основной пароль'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        Create_Portfolio.password_1.click()
        Create_Portfolio.password_1.setValue(123456789)
        
        
    });

    it('STEP 3. In the "Подтвердить пароль" field, enter a password different from the one entered in the "Основной пароль" field ', function(){

        const text_confirm_password = 'Подтвердить пароль'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)
        Create_Portfolio.password_2.click()
        Create_Portfolio.password_2.setValue(987654321)
        
    });


    it('STEP 4. Click button [Создать]', function(){

        driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1300 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 510, y: 800 }},
            { action: 'release' }
        ]);

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();
    });

    it('EXPECTED RESULT. Under the "Подтвердить пароль" field, an informational message is displayed in red "Пароль не подходит"', function(){
        
        const red_text3_1 = 'Пароль не подходит'
        const attr_red_text3_1 = Create_Portfolio.red_text3_1_ru.getAttribute('content-desc')
        expect(red_text3_1).toBe(attr_red_text3_1)

    });
});