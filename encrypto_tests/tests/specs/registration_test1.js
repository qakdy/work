

describe('registration without inserting data', function(){

    it('should check that im on screen SMALL INTRO and click button "NEXT"', function(){
        const text_small_intro = 'Small Intro'
        const small_intro  = $('~Small Intro')
        const attr_small_intro = small_intro.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)
       
        const text = 'Next'
        const next_btn = $('~Next')
        const attr = next_btn.getAttribute('content-desc')
        expect(attr).toBe(text)
        
        next_btn.click()
    });

    it('should check that im on screen SECURITY INTRO, check that the first checkbox is checked and the last not checked; click the last checkbox and check that this checkbox checked', function(){
        const text_security_intro = 'Security Intro'
        const security_intro  = $('~Security Intro')
        const attr_security_intro = security_intro.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const first_checkbox = $('~Master password and Fingerprint/FaceID (recommended)')
        const attr_1 = first_checkbox.getAttribute('checked')
        expect(attr_1).toBe('true')

        const last_checkbox = $('~I have nothing to worry about')
        const attr_last = last_checkbox.getAttribute('checked')
        expect(attr_last).toBe('false')

    })
    it('SECURITY INTRO, click the last checkbox and check that this checkbox checked; check alert with red text; click btn NEXT', function(){

        const last_checkbox = $('~I have nothing to worry about')
        last_checkbox.click()
        const attr_last = last_checkbox.getAttribute('checked')
        expect(attr_last).toBe('true')

        const alert_red_text = $('~Your portfolio database will be encrypted with a default password, it is less secure than creating your own. Do you want to proceed?')
        const attr_alert = alert_red_text.getAttribute('enabled')
        expect(attr_alert).toBe('true')

        const text = 'Next'
        const next_btn = $('~Next')
        const attr = next_btn.getAttribute('content-desc')
        expect(attr).toBe(text)
        
        next_btn.click()
    })

    it('should check that im on screen CREATE PORTFOLIO; click button CREATE', function(){


        const text_create_portfolio = 'Create portfolio'
        const create_portfolio = $('~Create portfolio')
        create_portfolio.click()
        const attr_create_portfolio = create_portfolio.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const my_portfolio = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText')
        const attr_my_portfolio = my_portfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)

        const text = 'Сreate'
        const create_btn = $('~Сreate')
        const attr_create = create_btn.getAttribute('content-desc')
        expect(attr_create).toBe(text)
        
        create_btn.click()
    })

    it('should check that im on screen MY PORTFOLIO; click button CREATE', function(){


        const text_my_portfolio_page = 'My portfolio'
        const my_portfolio = $('~My portfolio')
        const attr_my_portfolio = my_portfolio.getAttribute('content-desc')
        expect(attr_my_portfolio).toBe(text_my_portfolio_page)


    })
});