


// Barre de force du mot de passe
/*function validatePassword(password) {

    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Très faible";
            color = "red";
            break;
        case 3:
            strength = "Moyen";
            color = "orange";
            break;
        case 4:
            strength = "Fort";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
*/
//
// var pass = document.getElementById("password")
//     pass.addEventListener('keyup', function() {
//         checkPassword(pass.value)
//     })
//     function checkPassword(password) {
//         var strengthBar = document.getElementById("strength")
//         var strength = 0;
//             if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
//                 strength += 1
//             }
//             if (password.match(/[~<>?]+/)) {
//                 strength += 1
//             }
//             if (password.match(/[!@£$%^&*()]+/)) {
//                 strength += 1
//             }
//             if (password.length >= 8) {
//                 strength += 1
//             }
//
//     switch (strength) {
//         case 0:
//             strengthBar.value = 20;
//             color = "red";
//             break
//         case 1:
//             strengthBar.value = 40;
//             color = "orange";
//             break
//         case 2:
//             strengthBar.value = 60;
//             color = "green";
//             break
//         case 3:
//             strengthBar.value = 80;
//             color = "green";
//             break
//         case 4:
//             strengthBar.value = 100;
//             color = "green";
//             break
//     }
// }


/**
 * widget social
 */


let closeFn;
function closeShowingModal() {
    let showingModal = document.querySelector('.modal1.show');
    if (!showingModal) return;
    showingModal.classList.remove('show');
    document.body.classList.remove('disable-mouse');
    document.body.classList.remove('disable-scroll');
    if (closeFn) {
        closeFn();
        closeFn = null;
    }
}
document.addEventListener('click', function (e) {
    let target = e.target;
    if (target.dataset.ctaTarget) {
        closeFn = cta(target, document.querySelector(target.dataset.ctaTarget), { relativeToWindow: true }, function showModal(modal) {
            modal.classList.add('show');
            document.body.classList.add('disable-mouse');
            if(target.dataset.disableScroll){
                document.body.classList.add('disable-scroll');
            }
        });
    }
    else if (target.classList.contains('modal-close-btn')) {
        closeShowingModal();
    }
});
document.addEventListener('keyup', function (e) {
    if (e.which === 27) {
        closeShowingModal();
    }
})