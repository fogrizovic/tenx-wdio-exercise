 describe('Home tests', () => {
        
    it('Should have a header', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        let headerElement = $('h2');
        await expect(headerElement).toBeExisting();
        await expect(headerElement).toHaveTextContaining(
            'Secure Area');
    });
    
    it('Should have a sub header', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('h4')).toBeExisting();
        await expect($('h4')).toHaveTextContaining(
            'Welcome to the Secure Area. When you are done click logout below.');
    });

    it('Should have a Logout button', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('i=Logout')).toBeExisting();
    });
});



