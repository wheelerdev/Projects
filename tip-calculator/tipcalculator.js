

// To Do
        // -sort out more elegant way to figure state tax; loop over object etc
        // -secure from XSS?
        // -pre-tax/post/tax selector

        let myTax;
        let peopleCount;
        let ifPeople;
        let ifTax;

        const printedOutput = document.querySelector('.output');
        const buttonClick = document.getElementById('goButton');

        // let selectedState = document.getElementById('state').value;
        let taxGroup = document.querySelector('.taxSection');
        let billVal = document.getElementById("myBillInput");
        let tipVal = document.getElementById("myTipInput");
        let taxAmount = document.getElementById("tax_Amount")
        let taxRate = document.getElementById("tax_Rate")
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

        function getBillAmount() {


            let tipAmount = Math.floor((billVal.value * `0.${tipVal.value}`) * 100) / 100;
            let billPlusTip = Math.floor((billVal.value * `1.${tipVal.value}`) * 100) / 100;
            peopleCount = document.getElementById("people").value;

            if (peopleCount >= 2) {
                ifPeople = 'per person ';
            } else {
                ifPeople = "";
            }
           
            // Plug either tax field into myTax variable
            if (taxAmount.value) {
                myTax = taxAmount.value;
            } else if (taxRate.value) {
                myTax = Math.floor((billVal.value * `0.0${taxRate.value}`) * 100) / 100;
            };

            // Okay so currencyFormat is breaking all of this specifically for myTax. 
            // The two sub-variables for myTax are typeof-ing as an object? Might have to go upstream and push all the .value properties inside the original variable, hopefully resulting in a normal number type.
            ifTax = myTax ? `tax is ${currencyFormat(myTax)} and your ` : '';

            console.log(taxAmount.value);
            console.log(taxRate.value);


            console.log(myTax);
            


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
                printedOutput.innerHTML = `Your ${ifTax}tip is ${currencyFormat(tipAmount)} and the total ${ifPeople}including tip will be ${currencyFormat(billPlusTip / peopleCount)}.`;
            };
        }