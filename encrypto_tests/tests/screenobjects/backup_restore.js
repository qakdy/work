


class Backup_Restore{


    get header_en(){
        return $('~Backup/Restore')
    }

    get header_ru(){
        return $('~Резервное копирование/Восстановление')
    }

    get backup_btn(){
        return $('~Backup')
    }

    get backup_btn_ru(){
        return $('~Резервное копирование')
    }

    get back_btn(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }

    get show_menu(){
        return $('//android.widget.Button[@content-desc="Show menu"]')
    }

    get show_menu_ru(){
        return $('//android.widget.Button[@content-desc="Показать меню"]')
    }

    get name(){
        return $('~Dmitriy')
    }

    get share(){
        return $('~Share')
    }

    get share_ru(){
        return $('~Поделиться')
    }

    get delete(){
        return $('~Delete')
    }


    get delete_ru(){
        return $('~Удалить')
    }


    get file(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView')
    }

    get bluetooth(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[2]/android.widget.TextView')
    }

    get gmail(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[3]/android.widget.TextView')
    }

    get drive(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[1]/android.widget.TextView')
    }

    get drive_ru(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[1]/android.widget.TextView[1]')
    }

    get bluetooth_ru(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[2]/android.widget.TextView')
    }

    get gmail_ru(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout[3]/android.widget.TextView')
    }

    
}

export default new Backup_Restore()