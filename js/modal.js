$(function(){
    $('#exampleModal').arcticmodal(
        {
            beforeOpen: function(data, el) {
                alert('beforeOpen');
            }
    });
});