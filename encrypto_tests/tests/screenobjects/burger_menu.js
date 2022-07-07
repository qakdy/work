
class Burger_Menu{

    get settings_en(){
        return $('~Settings')
    }

    get plus(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button[1]')
    }

    get edit(){
        return $('hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button[1]')
    }

    get portofolio_fullname_en(){
        return $('~Dmitriy Kasinskiy')
    }

    get portofolio_default_en(){
        return $('~My portfolio')
    }

    get portofolio_fullname_ru(){
        return $('~Дмитрий Касинский')
    }

    get portofolio_default_ru(){
        return $('~Мое портфолио')
    }

    get settings_ru(){
        return $('~Настройки')
    }

    get backup_restore_en(){
        return $('~Backup/Restore')
    }

    get backup_restore_ru(){
        return $('~Резервное копирование/Восстановление')
    }

    get privacy_policy_en(){
        return $('~Privacy Policy')
    }

    get privacy_policy_ru(){
        return $('~Политика конфиденциальности')
    }

    get about_en(){
        return $('~About')
    }

    get about_ru(){
        return $('~О приложении')
    }

    get lock_en(){
        return $('~Lock')
    }

    get lock_ru(){
        return $('~Блокировать')
    }
}

export default new Burger_Menu()