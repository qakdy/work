

class Small_Intro{

    get header_ru(){
        return $('~Введение')
    }

    get header_en(){
        return $('~Small Intro')
    }

    get text_ru(){
        return $('~Добро пожаловать в EnCrypto Portfolio, лучшее автономное решение для Ваших криптоактивов! Вся информация хранится только локально на Вашем устройстве, и НИ ОДИН бит информации не передается никуда. Ваша конфиденциальность остается на высшем уровне!')
    }

    get text_en(){
        return $('~Welcome to EnCrypto Portfolio, the best offline solution for your crypto assets! All the information is stored only locally on your device, and NO ONE bit of information is transmitted anywhere. Your privacy stays in your only pocket.')
    }
    
    get next_btn_en(){
        return $('~Next')
    }

    get next_btn_ru(){
        return $('~Далее')
    }
}


export default new Small_Intro()