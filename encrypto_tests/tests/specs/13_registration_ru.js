import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'



describe('registration test 13 ru; Check portfolio creation when selecting the "Только отпечаток пальца/FaceID(компромиссный вариант)" radio button on the "Безопасность" screen on the onboarding screen or "Ничего, мне не о чем беспокоиться " on the "Безопасность" screen with the "Мое портфолио" field changed', function(){

    it('PRECONDITION. The user went through the onboarding screen and selected on the security screen the "Только отпечаток пальца/FaceID(компромиссный вариант)" radio button on the "Безопасность" screen or "Ничего, мне не о чем беспокоиться " on the "Безопасность" screen', function(){        

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

        const text_checkbox_4 = 'Ничего, мне не о чем беспокоиться';
        const attr_4_text = Security_Info.checkbox_4_ru.getAttribute('content-desc')
        expect(attr_4_text).toBe(text_checkbox_4)
        Security_Info.checkbox_4_ru.click()
        const attr_4 = Security_Info.checkbox_4_ru.getAttribute('checked')
        expect(attr_4).toBe('true')
        
        const text_next_btn_1 = 'Далее'
        const attr_next_btn_1 = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_ru.click()

    });
   
    it('STEP 1. Edit "Мое портфолио" field data', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio_4.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio_4.click()
        Create_Portfolio.myportfolio_4.clearValue()
        Create_Portfolio.myportfolio_4.setValue('Дмитрий Касинский')
        
       
    });

    it('STEP 2. Click button [Создать]', function(){

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();
    });

    it('EXPECTED RESULT. After clicking the [Создать] button, the user successfully creates a portfolio and goes to the main application window with the profile name "Мое портфолио"', function(){
        
        const text_header = 'Дмитрий Касинский'
        const attr_text_header = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(text_header).toBe(attr_text_header)

    });
});