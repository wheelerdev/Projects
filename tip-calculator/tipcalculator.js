

// To Do
        // -when include tax is selected and field is left empty, if you click calculate it outputs NaN. Modify to either give a warning or ignore.
        // -secure from XSS?

        let myTax;
        let peopleCount;
        let ifPeople;
        let ifTax;

        const lineStyle = document.querySelector('.aLine');
        const ifMany = document.getElementsByClassName('showIfMany');
        const printTip = document.querySelector('.outputTip');
        const printTotal = document.querySelector('.outputTotal');
        const printedOutput = document.querySelector('.output');
        const buttonClick = document.getElementById('goButton');

        let taxGroup = document.querySelector('.taxSection');
        let billVal = document.getElementById("myBillInput");
        let tipVal = document.getElementById("myTipInput");
        let taxAmount = document.getElementById("tax_Amount");
        let taxRate = document.getElementById("tax_Rate");
        let taxSwitch = document.getElementById("switch");


        function taxToggle() {
            taxGroup.classList.toggle('iAmOn');
        }


        // -while taxSection is open:
        // -switch which input field is visible
        // -clear opposite field on change of focus
        function showCorrectTaxField() {
            let taxAmountChecked = document.getElementById("taxAmountRadio");
            let taxRateChecked = document.getElementById('taxRateRadio');
            let taxAmountID= document.getElementById('tax_Amount');
            let taxRateID= document.getElementById('tax_Rate');

            if(taxAmountChecked.checked) {
                console.log('tax amount');
                taxRate.value = '';
              }else if(taxRateChecked.checked) {
                console.log('tax rate');
                taxAmount.value = '';
              }
              
              taxAmountID.style.display = taxAmountChecked.checked ? "inline-block" : "none";
              taxRateID.style.display = taxRateChecked.checked ? "inline-block" : "none";
        }

        

        taxSwitch.addEventListener('click', taxToggle);
        buttonClick.addEventListener('click', getBillAmount);


        // Currency will show a string with commas and digits to the hundredth place.
        function currencyFormat(num) {
            return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

        // change innerHTML of showIfMany elements. Convert HTML Collection to array then loop.
        function perPerson () {
            let tempThing = [...ifMany];
            tempThing.forEach(element => {
                if (peopleCount >= 2) {
                    element.innerHTML = `per person`;
                    lineStyle.classList.add('aLineThick');
                } else {
                    element.innerHTML = ``;
                    lineStyle.classList.remove('aLineThick');
                }
            });
        }

        function getBillAmount() {


            let tipAmount = Math.floor((billVal.value * `0.${tipVal.value}`) * 100) / 100;
            let billPlusTip = Math.floor((billVal.value * `1.${tipVal.value}`) * 100) / 100;
            peopleCount = document.getElementById("people").value;


            if (peopleCount >= 2) {
                ifPeople = 'per person ';
            } else {
                ifPeople = "";
            }

            perPerson();
        
            // Plug either tax field into myTax variable
            if (taxAmount.value) {
                myTax = Number(taxAmount.value);
            } else if (taxRate.value) {
                myTax = (billVal.value * (taxRate.value / 100));
                // myTax = Math.floor((Number(billVal.value) * `0.0${Number(taxRate.value)}`) * 100) / 100;
            };

            console.log(myTax);
            console.log(billVal.value);

            // Clears all tax values if tax switch is unselected
            if (!taxSwitch.checked) {
                myTax = "";
                taxAmount.value = "";
                taxRate.value = "";
            };

            ifTax = myTax ? `tax is ${currencyFormat(myTax)} and your ` : '';
            


            // Form validation logic
            if ((tipVal.value == '') && (billVal.value == '')) {
                tipVal.classList.add('textBoxWarn');
                billVal.classList.add('textBoxWarn');
                printedOutput.innerHTML = `Select bill amount & tip percentage`;
            } else if (billVal.value == '') {
                billVal.classList.add('textBoxWarn');
                tipVal.classList.remove('textBoxWarn');
                billVal.focus();
                printedOutput.innerHTML = `Enter bill amount`;
            } else if (tipVal.value == '') {
                tipVal.classList.add('textBoxWarn');
                tipVal.focus();
                printedOutput.innerHTML = `Select tip percentage`;
            } else {
                billVal.classList.remove('textBoxWarn');
                tipVal.classList.remove('textBoxWarn');
                // perPerson();
                // printedOutput.innerHTML = `Your ${ifTax}tip is ${currencyFormat(tipAmount)}. The total ${ifPeople}including tip will be ${currencyFormat((billPlusTip + myTax) / peopleCount)}.`;
                printTip.innerHTML = `Tip: ${currencyFormat(tipAmount / peopleCount)}`;
                printTotal.innerHTML = `Total: ${currencyFormat((billPlusTip + myTax) / peopleCount)}`;
            };
        }