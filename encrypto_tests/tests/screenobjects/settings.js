

class Settings{

    get header_en(){
        return $('~Settings')
    }

    get theme(){
        return $('(//android.widget.ImageView[@content-desc="Show menu"])[1]')
    }

    get dark_theme_en(){
        return $('~Dark')
    }

    get light_theme_en(){
        return $('~Light')
    }

    get system_theme_en(){
        return $('~System')
    }

    get english_languager_en(){
        return $('~English')
    }

    get russian_language_en(){
        return $('~Russian')
    }

    get system_language_en(){
        return $('~System')
    }

    get language(){
        return $('	(//android.widget.ImageView[@content-desc="Show menu"])[2]')
    }

    get back_btn(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }


}

export default new Settings()