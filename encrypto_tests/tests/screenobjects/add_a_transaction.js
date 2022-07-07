class AddTransaction{

    get header_en(){
        return $('~Add a transaction')
    }

    get header_ru(){
        return $('~Добавить транзакцию')
    }

    get quantity_btc(){
        return $('//android.view.View/android.widget.EditText[1]')
    }

    get in(){
        return $('~In')
    }

    get in_ru(){
        return $('~Входящее')
    }

    get out(){
        return $('~Out')
    }

    get out_ru(){
        return $('~Исходящее')
    }

    get buy(){
        return $('~Buy')
    }

    get buy_ru(){
        return $('~Покупка')
    }

    get sell(){
        return $('~Sell')
    }

    get sell_ru(){
        return $('~Продажа')
    }

    get transfer(){
        return $('~Transfer')
    }

    get transfer_ru(){
        return $('~Перечисление')
    }

    get exchange(){
        return $('~Exchange')
    }

    get exchange_ru(){
        return $('~Обмен')
    }

    get mining(){
        return $('~Mining')
    }

    get mining_ru(){
        return $('~Майнинг')
    }

    get staking(){
        return $('~Staking')
    }

    get staking_ru(){
        return $('~Стейкинг')
    }

    get ok_btn_calendar_btc(){
        return $('~OK')
    }

    get ok_btn_calendar_btc_ru(){
        return $('~ОК')
    }

    get usd_form_btc(){
        return $('//android.view.View/android.widget.EditText[2]')
    }
    
    get wallet_dropdown(){
        return $('~Show menu')
    }

    get wallet_dropdown_ru(){
        return $('~Показать меню')
    }

    get metamask(){
        return $('~Metamask')
    }

    get save(){
        return $('~Save')
    }

    get cancel(){
        return $('~Cancel')
    }

    get save_ru(){
        return $('~Сохранить')
    }

    get cancel_ru(){
        return $('~Отмена')
    }

    get red_message(){
        return $('~Please Enter quantity')
    }
    
    get red_message_1(){
        return $('(//android.view.View[@content-desc="Please Enter quantity"])[1]')
    }

    get red_message_2(){
        return $('(//android.view.View[@content-desc="Please Enter quantity"])[2]')
    }

    get red_message_ru(){
        return $('~Пожалуйста, введите количество')
    }
    
    get red_message_1_ru(){
        return $('(//android.view.View[@content-desc="Пожалуйста, введите количество"])[1]')
    }

    get red_message_2_ru(){
        return $('(//android.view.View[@content-desc="Пожалуйста, введите количество"])[2]')
    }

    get wallet_exchange(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View/android.widget.EditText')
    }

    get back_btn(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }

    get red_message_calendar(){
        return $('~You can not enter a future date')
    }

    get red_message_calendar_ru(){
        return $('~Нельзя вводить будущую дату')
    }
}
export default new AddTransaction()