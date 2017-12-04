//Placeholder fixed for Internet Explorer
$(function () {
    var input = document.createElement("input");
    if (('placeholder' in input) == false) {
        $('[placeholder]').focus(function () {
            var i = $(this);
            if (i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if (i.hasClass('password')) {
                    i.removeClass('password');
                    this.type = 'password';
                }
            }
        }).blur(function () {
            var i = $(this);
            if (i.val() == '' || i.val() == i.attr('placeholder')) {
                if (this.type == 'password') {
                    i.addClass('password');
                    this.type = 'text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var i = $(this);
                if (i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }
});

function onSingUpSuccess(response){
    alert(response.status);
}

function onError(xhr) {
    alert("Error: " + xhr.status + ", " +xhr.statusText);
}

function onSingInButtonClick() {
    var user_name = $("#sing_up_user_name").val();
    var password = $("#sing_up_password").val();
    var data = JSON.stringify({"user_name":user_name, "password":password});

    $.ajax({
        type: "POST",
        url: "api/login_check",
        data: data,
        success: onSingUpSuccess,
        error: onError
    });

}

$(document).ready(function () {
    $("#sing_up_button").click(onSingInButtonClick)
});

