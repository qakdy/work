import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'



describe('registration test 12 en; Check portfolio creation when selecting the "Fingerprint/FaceID only (compromise)" radio button on the "Security" screen on the onboarding screen or "Nothing, I have nothing to worry about" on the "Security" screen with an empty field "My portfolio"', function(){

    it('PRECONDITION. The user went through the onboarding screen and selected on the security screen the "Fingerprint/FaceID only (compromise)" radio button on the "Security" screen or "Nothing, I have nothing to worry about" on the "Security" screen', function(){        

        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_en.click()

        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_4 = 'I have nothing to worry about';
        const attr_4_text = Security_Info.checkbox_4_en.getAttribute('content-desc')
        expect(attr_4_text).toBe(text_checkbox_4)
        Security_Info.checkbox_4_en.click()
        const attr_4 = Security_Info.checkbox_4_en.getAttribute('checked')
        expect(attr_4).toBe('true')
        
        const text_next_btn_1 = 'Next'
        const attr_next_btn_1 = Security_Info.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_en.click()

    });
   
    it('STEP 1. Delete data from the field "My portfolio"', function(){
    
        const text_create_portfolio = 'Create portfolio'
        const attr_create_portfolio = Create_Portfolio.header_en.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const attr_my_portfolio = Create_Portfolio.myportfolio_4_en.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio_4_en.click()
        Create_Portfolio.myportfolio_4_en.clearValue()
       
    });

    it('STEP 2 Click button [Create]', function(){

        const text_create_btn = 'Create'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_en.click();
    });

    it('EXPECTED RESULT. After clicking the [Create] button Under the "My portfolio" field, an informational message is displayed in red "Please enter a name."', function(){
        
        const red_text1 = 'Please Enter name'
        const attr_red_text1 = Create_Portfolio.red_text1_en.getAttribute('content-desc')
        expect(red_text1).toBe(attr_red_text1)

    });
});