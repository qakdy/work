import Small_Intro from '../screenobjects/small_intro'

describe('onboarding screen test 1 ru; Запуск приложения', function(){

    it('STEP 1. Запустить приложение; EXPECTED RESULT: Отображается экран "Введение " c: - названием экрана в Header "Введение" - текстом "Добро пожаловать в EnCrypto, лучшее автономное решение  для ваших криптоактивов ! Вся информация хранится только локально на Вашем устройстве, и НИ ОДИН бит информации не передается  никуда. Ваша конфеденциальность остается на высшем уровне!"-  кнопка [Далее]', function(){
        
        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text = 'Добро пожаловать в EnCrypto Portfolio, лучшее автономное решение для Ваших криптоактивов! Вся информация хранится только локально на Вашем устройстве, и НИ ОДИН бит информации не передается никуда. Ваша конфиденциальность остается на высшем уровне!'
        const attr_text = Small_Intro.text_ru.getAttribute('content-desc')
        expect(attr_text).toBe(text)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)
        
    });
});