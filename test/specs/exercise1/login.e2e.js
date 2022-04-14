describe('Login tests', () => {
        
    it('Should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('/html/body/div[2]/div/div/form/div[1]/div/div/input').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await browser.pause(3000); // waiting for page to load

        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
    
    it('test2', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login2`);
2
        await $('/html/body/div[2]/div/div/form/div[1]/div/input').setValue('tomsmith');
        await $('#password').setValue('WrongPassword');
        await $('button[type="submit"]').click();

        await browser.pause(3000); // waiting for label to be displayed

        await expect($('#flash')).toHaveTextContaining(
            'Your password is invalid!');
    });
});



