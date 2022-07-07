
class Create_Portfolio{
    
    get header_ru(){
        return $('~Создать портфолио')
    }

    get header_en(){
        return $('~Create portfolio')
    }

    get back_btn(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button')
    }

    get welcome_ru(){
        return $('~Добро пожаловать')
    }

    get welcome_en(){
        return $('~Welcome')
    }

    get text1_ru(){
        return $('~Пожалуйста, введите и подтвердите мастер-пароль')
    }

    get text1_en(){
        return $('~Please enter and confirm your master password')
    }

    get text2_ru(){
        return $('~Хорошо запомните свой мастер-пароль или запишите его на бумаге и положите в настоящий сейф. Ваши данные невозможно будет восстановить, если вы забудете или потеряете свой пароль, потому что Ваш пароль является единственным ключом для расшифровки данных.')
    }

    get text2_en(){
        return $('~Remember your master password by heart or put it down on the paper and put it into the real safe. It is not possible to restore your data if you forgot/lost your password because the data is encrypted and your password is the only key to decrypt the data.')
    }

    get myportfolio(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')
    }

    get myportfolio_rd(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]')
    }

    get master_password_rd(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]')
    }

    get confirm_password_rd(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[3]')
    }

    get red_text1_ru(){
        return $('~Пожалуйста, введите имя')
    }

    get red_text2_ru(){
        return $('~Пожалуйста, введите пароль')
    }

    get red_text3_ru(){
        return $('~Пожалуйста, введите подтверждение пароля')
    }

    get red_text3_1_ru(){
        return $('~Пароль не подходит')
    }

    get red_text1_en(){
        return $('~Please Enter name')
    }

    get red_text2_en(){
        return $('~Please Enter password')
    }

    get red_text3_en(){
        return $('~Please re enter password')
    }

    get red_text3_1_en(){
        return $('~Password does not match')
    }

    get myportfolio_4(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText')
    }

    get myportfolio_4_en(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText')
    }

    get password_1(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')
    }

    get password_2(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[3]')
    }

    get create_btn_ru(){
        return $('~Создать')
    }

    get create_btn_en(){
        return $('~Create')
    }
}

export default new Create_Portfolio()