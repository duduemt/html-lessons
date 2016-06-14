var App = function () {
    var self = this;

    var loginKey = 'e30studio.login';

    this.init = function () {
        console.info('APP:init');

        var loginForm = $("#loginForm"),
            welcomeScreen = document.getElementById('welcome');

        var loginBtn = document.getElementById('loginBtn'),
            logoutBtn = document.getElementById('logoutBtn');

        loginBtn.addEventListener('click', this.loginAction);
        logoutBtn.addEventListener('click', this.logoutAction);

        if (this.isLogged()) {
            // jestesmy zalogowani
            console.info('zalogowani');
            loginForm[0].style.display = 'none';
            welcomeScreen.style.display = 'display';

            var userText = document.getElementById('user');
            userText.innerHTML = self.login;

        } else {
            // nie jestesmy zalogwani
            console.info('nie zalogowani');
            loginForm[0].style.display = 'display';
            welcomeScreen.style.display = 'none';
        }


        return this;
    };

    /**
     * this function returns is users logged in or not
     *
     * @returns {boolean}
     */
    this.isLogged = function() {
        if (window.localStorage) {
            var login = window.localStorage.getItem(loginKey);

            if (login) {
                self.login = login;
                return true;

            } else {
                return false;
            }
        }

        return false;
    };


    this.loginAction = function(event) {
        var login = document.getElementById('username');
        if (login.value) {
            window.localStorage.setItem(loginKey, login.value);
            self.login = login.value;
        }
    };

    /**
     *
     * @param event Super zmienna
     */
    this.logoutAction = function(event) {
        console.info('akcja');
        self.login = null;
        window.localStorage.removeItem(loginKey);
    };

    return self.init();
};

var jq = function () {
    var self = this;

    this.init = function () {

        // native js
        var list = document.getElementsByTagName('ul')[0];
        var elements = list.children;
        var preLast = elements[elements.length - 2];

        console.info('preLast', preLast);

        // jquery
        console.info('preLast',
            $('ul > li:nth-last-child(2)')
        );


        // native js
        var kontener = document.createElement('div');
        kontener.setAttribute('id', 'kontener123');
        kontener.setAttribute('class', 'big-box yellow');

        // jq
        var k = $('<div id="kontener" class="big-box yellow"></div>');


        // native js
        // var hedery = document.getElementsByTagName('header');
        //
        // var h;
        // for (var i = 0; i < hedery.length; i++) {
        //     h = hedery[i];
        //
        //     h.addEventListener('click', function (event) {
        //         // zwinac wszystkie inne jezeli sa
        //         var listyRozwiniete = document.getElementsByTagName('div');
        //         for (var j = 0; j < listyRozwiniete.length; j++) {
        //             listyRozwiniete[j].style.height = 0;
        //         }
        //
        //         // rozwinac content obecnego elementu
        //         event.target.nextElementSibling.style.height = 'auto';
        //
        //     });
        // }

        // jq
        $('header').click(function () {
            $('li > div').css({
                height: 0
            })
            $(this).parent().find('div').css({
                height: 'auto'
            })
        });

        return self;
    };

    return self.init();

};

document.addEventListener('DOMContentLoaded', function () {
    // window.APP = new App();
    window.APP = new jq();
});