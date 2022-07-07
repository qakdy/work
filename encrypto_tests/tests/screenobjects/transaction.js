

class Transaction{
    get header_en_btc(){
        return $('~Transaction BTC')
    }

    get header_ru_btc(){
        return $('~Tранзакция BTC')
    }

    get plus(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button')
    }

    get five_btc(){
        return $('~5.0 BTC')
    }
    
    get minus_five_btc(){
        return $('~-5.0 BTC')
    }
    

    get null_btc(){
        return $('~0.0 BTC')
    }

    get null_usd(){
        return $('~0.0 USD')
    }

    get back_btn(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }

}
export default new Transaction()