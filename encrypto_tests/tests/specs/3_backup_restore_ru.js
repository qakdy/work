import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'
import Myportfolio from '../screenobjects/myportfolio'
import Burger_Menu from '../screenobjects/burger_menu'
import Backup_Restore from '../screenobjects/backup_restore'



describe('backup/restore test 3 ru; Check the ability to display the application to send a zip file', function(){

    it('PRECONDITION. Register in the application', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_2 = 'Только мастер-пароль (наиболее безопасный)';
        const attr_2_text = Security_Info.checkbox_2_ru.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_ru.click()
        const attr_2 = Security_Info.checkbox_2_ru.getAttribute('checked')
        expect(attr_2).toBe('true')
        
        const text_next_btn_1 = 'Далее'
        const attr_next_btn_1 = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_ru.click()

        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio.click()
        Create_Portfolio.myportfolio.setValue('Дмитрий Касинский')

        const text_master_password = 'Основной пароль'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        Create_Portfolio.password_1.click()
        Create_Portfolio.password_1.setValue(1234)
    
        const text_confirm_password = 'Подтвердить пароль'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)
        Create_Portfolio.password_2.click()
        Create_Portfolio.password_2.setValue(1234)

        driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1300 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 510, y: 800 }},
            { action: 'release' }
        ]);

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();

        const myportfolio_username = 'Дмитрий Касинский'
        const attr_myportfolio_username = Myportfolio.fullname_header_ru.getAttribute('content-desc')
        expect(myportfolio_username).toBe(attr_myportfolio_username)

        Myportfolio.burger_menu.click()
    });

    it('PRECONDITION. The user is on the Резервное копирование/Восстановление screen from the drop down menu. ', function(){ 

        const backup_restore_text = 'Резервное копирование/Восстановление'
        const attr_backup_restore  = Burger_Menu.backup_restore_ru.getAttribute('content-desc')
        expect(backup_restore_text).toBe(attr_backup_restore)
        
        Burger_Menu.backup_restore_ru.click()

        Backup_Restore.header_ru.waitForDisplayed()

        const backup_restore_header_text = 'Резервное копирование/Восстановление'
        const attr_header = Backup_Restore.header_ru.getAttribute('content-desc')
        expect(backup_restore_header_text).toBe(attr_header)

    });  

    it(' STEP 1. Click on the [Резервное копирование] button', function(){ 

        const backup_btn_text = 'Резервное копирование'
        const attr_backup_btn = Backup_Restore.backup_btn_ru.getAttribute('content-desc')
        expect(backup_btn_text).toBe(attr_backup_btn)

        Backup_Restore.backup_btn_ru.click()

        
    }); 

    it(' STEP 2. Click on the button on the right on the tile of the zip file', function(){ 

        Backup_Restore.show_menu_ru.click()

        
    }); 

    it(' STEP 3. Select "Поделиться" from the drop down menu', function(){ 

        Backup_Restore.share_ru.click()

    }); 

    it('EXPECTED RESULT. The screen displays: -sent file ;-list of applications with which you can send a file', function(){ 

        const attr_file = Backup_Restore.file.getAttribute('displayed')
        expect(attr_file).toBe('true')

        const text_bluetooth = 'Bluetooth'
        const attr_bluetooth = Backup_Restore.bluetooth_ru.getAttribute('text')
        expect(text_bluetooth).toBe(attr_bluetooth)

        const text_gmail = 'Gmail'
        const attr_gmail = Backup_Restore.gmail_ru.getAttribute('text')
        expect(text_gmail).toBe(attr_gmail)

        const drive_text = 'Диск'
        const attr_drive = Backup_Restore.drive_ru.getAttribute('text')
        expect(drive_text).toBe(attr_drive)
        
    });  

});