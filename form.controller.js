if (!academy) {
    var academy = {};
}
if (!academy.form) {
    academy.form = {};
}

academy.form.FormController = function () {
    var vm = this;
    vm.data = [];
    vm.submit = submit;
    vm.form = { "formtitle" :"test form",
        "questions" : [
            {

                "questiondescr": "Hur upplevde du ditt senaste besök?",
                "choices": [
                    {
                        "option": "Bra"
                    },
                    {
                        "option": "OK"
                    },
                    {
                        "option": "Dåligt"
                    }
                ],
                "answer": "",
                "type" : "check"
            }]};

    function submit () {
        console.log(vm.data);

    };

};