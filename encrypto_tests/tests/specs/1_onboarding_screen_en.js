import Small_Intro from '../screenobjects/small_intro'


describe('onboarding screen test 1 en; Запуск приложения', function(){


    it('STEP 1. Запустить приложение; EXPECTED RESULT: Отображается экран "Введение " c: - названием экрана в Header "Введение" - текстом "Добро пожаловать в EnCrypto, лучшее автономное решение  для ваших криптоактивов ! Вся информация хранится только локально на Вашем устройстве, и НИ ОДИН бит информации не передается  никуда. Ваша конфеденциальность остается на высшем уровне!"-  кнопка [Далее]', function(){        

        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text = 'Welcome to EnCrypto Portfolio, the best offline solution for your crypto assets! All the information is stored only locally on your device, and NO ONE bit of information is transmitted anywhere. Your privacy stays in your only pocket.'
        const attr_text = Small_Intro.text_en.getAttribute('content-desc')
        expect(attr_text).toBe(text)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
    });
});