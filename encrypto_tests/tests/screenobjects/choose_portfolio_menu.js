


class ChoosePortfolio {

    get header_en(){
        return $('//android.view.View[@content-desc="Choose Portfolio:"]')
    }

    get header_en(){
        return $('//android.view.View[@content-desc="Выберите портфолио:"]')
    }

    get show_menu(){
        return $('~Show menu')
    }

    get show_menu_ru(){
        return $('~Показать меню')
    }

    get username(){
        return $('~Dmitriy Kasinskiy')
    }

    get username_ru(){
        return $('~Дмитрий Касинский')
    }

    get password_en(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText')
    }

    get ok_btn_en(){
        return $('~Ok')
    }

    get ok_btn_ru(){
        return $('~Ок')
    }
}

export default new ChoosePortfolio()