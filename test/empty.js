describe('Simple', function () {
    var TestPage = function () {
        this.textInput = element(by.id('simpleText'));
        this.select = element(by.css('#simpleSelect2 +.select2'));
        this.chosen = element(by.css(':checked'));

        this.get = function () {
            browser.get('http://localhost:9000/test/fixtures/empty.html');
        };

        this.getInputValue = function () {
            return this.textInput.getAttribute('value');
        };

        this.setInputValue = function (value) {
            this.textInput.clear();
            this.textInput.sendKeys(value);
        };

        this.getChosenLabel = function () {
            return this.chosen.getText();
        };

        this.selectValue = function (index) {
            this.select.click();
            var value = element(by.css('#select2-simpleSelect2-results > li:nth-child(' + index + ')'));
            value.click();
        };

        this.get();
    };

    var page;
    beforeEach(function () {
        page = new TestPage();
    });

    it('Should show selected value', function () {
        expect(page.getInputValue()).toEqual('');
        expect(page.getChosenLabel()).toEqual('');
    });

    it('Should switch value', function () {
        page.setInputValue('2');
        expect(page.getChosenLabel()).toEqual('Two');
    });

    it('Should set value on model', function () {
        page.selectValue(2);
        expect(page.getInputValue()).toEqual('2');
        expect(page.getChosenLabel()).toEqual('Two');
    });
});
