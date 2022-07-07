
class Myportfolio {

    get default_header_ru(){
        return $('~Мое портфолио')
    }

    get default_header_en(){
        return $('~My portfolio')
    }

    get fullname_header_ru(){
        return $('~Дмитрий Касинский')
    }

    get fullname_header_en(){
        return $('~Dmitriy Kasinskiy')
    }

    get balance_ru(){
        return $('~Баланс кошелька $ 0.0 Показать меню Вклады')
    }

    get balance_en(){
        return $('~Wallet Balance $ 0.0 Show menu Holdings')
    }

    get balance_market_cap_en(){
        return $('//android.view.View[@content-desc="Wallet Balance $ 0.0 Show menu Market cap"]')
    }
    

    get plus(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[2]')
    }

    get burger_menu(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]')
    }

    get holdings_en(){
        return $('~Holdings')
    }

    get holdings_ru(){
        return $('~Вклады')
    }

    get market_cap_en(){
        return $('~Market cap')
    }

    get market_cap_ru(){
        return $('~Капитализация')
    }

    get trend_up_en(){
        return $('~Trend Up')
    }

    get trend_up_ru(){
        return $('~Рост')
    }

    get trend_down_en(){
        return $('~Trend Down')
    }

    get trend_down_ru(){
        return $('~Падение')
    }
    
}

export default new Myportfolio()