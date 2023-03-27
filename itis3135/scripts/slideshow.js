$(document).ready(function() 
{
    // console.log("Hello");
    var curr_pic;
    var next_pic;
    
    $('#prev').click(function()
    {
        curr_pic = $('#current_pic');
        next_pic = curr_pic.prev();
        console.log("clidked");
        if (next_pic.length > 0) 
        {
            console.log("indide if");
            curr_pic.removeAttr('id');
            next_pic.attr('id', 'current_pic');
            // location.reload();
        }
    });
    $('#next').click(function()
    {
        curr_pic = $('#current_pic');
        next_pic = curr_pic.next();
        if (next_pic.length > 0) 
        {
            curr_pic.removeAttr('id');
            next_pic.attr('id', 'current_pic');
            // location.reload();
        }
    });
})