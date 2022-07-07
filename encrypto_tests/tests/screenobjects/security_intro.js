



class Security_Intro {

    get header_ru(){
        return $('~Безопасность')
    }

    get header_en(){
        return $('~Security Intro')
    }

    get text1_ru(){
        return $('~В качестве дополнительной меры безопасности Вы можете зашифровать данные с помощью собственного мастер-пароля, чтобы убедиться, что данные защищены, даже если устройство потеряно или украдено.')
    }

    get text1_en(){
        return $('~As an additional security measure, you can encrypt the data with your own master password to make sure that your data is secured, even if your device is lost or stolen.')
    }

    get text2_ru(){
        return $('//android.view.View[@content-desc="Выберите меру безопасности:"]')
    }

    get text2_en(){
        return $('//android.view.View[@content-desc="Select security measure:"]')
    }

    get checkbox_1_ru(){
        return $('~Мастер-пароль и отпечаток пальца/FaceID (рекомендуется)')
    }

    get checkbox_1_en(){
        return $('~Master password and Fingerprint/FaceID (recommended)')
    }

    get checkbox_2_ru(){
        return $('~Только мастер-пароль (наиболее безопасный)')
    }

    get checkbox_2_en(){
        return $('~Master password only (the most secure)')
    }

    get checkbox_3_ru(){
        return $('~Только отпечаток пальца/FaceID (компромиссный вариант)')
    }

    get checkbox_3_en(){
        return $('~Fingerprint/FaceID (trade-off option)')
    }

    get checkbox_4_ru(){
        return $('~Ничего, мне не о чем беспокоиться')
    }
    
    get checkbox_4_en(){
        return $('~I have nothing to worry about')
    }

    get next_btn_ru(){
        return $('~Далее')
    }

    get next_btn_en(){
        return $('~Next')
    }

    get inf_message_ru(){
        return $('~База данных вашего портфолио будет зашифрована паролем по умолчанию, это менее безопасно, чем создание собственного. Вы хотите продолжить?')
    }

    get inf_message_en(){
        return $('~Your portfolio database will be encrypted with a default password, it is less secure than creating your own. Do you want to proceed?')
    }



}

export default new Security_Intro()