import { browser, $, expect } from '@wdio/globals'

describe('001 - FITUR REGISTER', function () {
    it('RG001 - Register with only input email', async () => {
        await browser.url('https://pijarmahir.id/new-profile?type=reguler');
        await $('#email').setValue('dummydp88@gmail.com');

        const buttonClickable = await $('button')
        expect(buttonClickable).toBeDisabled('true');
    });

    it('RG002 - Register with only input phone number and email', async () => {
        await browser.url('https://pijarmahir.id/new-profile?type=reguler');
        await $('#email').setValue('dummydp88@gmail.com');
        await $('#phone').setValue('81335709289');

        const buttonClickable = await $('button')
        expect(buttonClickable).toBeDisabled('true');
    })

    it('RG003 - Register with password less than eight character', async () => {
        await browser.url('https://pijarmahir.id/new-profile?type=reguler');
        await $('#email').setValue('dummydp88@gmail.com');
        await $('#phone').setValue('81335709289');
        await $('#fullname').setValue('Deni Panji Dirgantara');
        await $('#password').setValue('123456');
        await $('input[type=checkbox]').isSelected('true');
        

        const errorMsg = await $('img[alt=Error] + p');
        expect(errorMsg).toHaveText('Minimum 8 karakter');
    })
});