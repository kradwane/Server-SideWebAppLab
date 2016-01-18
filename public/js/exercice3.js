$(document).ready(function()
{
    //Disabled not visible input
    $(".choice-adding > * input[required]").attr("disabled", "disabled");
    $("#myForm_label_type").change(function()
    {
        $(".choice-adding:visible > * input[required]").attr("disabled", "disabled");
        $(".choice-adding:visible").slideToggle();
        var tabData = $(this).find(":selected").attr("data-div").split(",")
        for(var cpt = 0; cpt < tabData.length; cpt++)
        {
            //Or show them
            $("#" + tabData[cpt]).slideToggle();
            $("#" + tabData[cpt] + " > * input[disabled]").removeAttr("disabled");
        }
    });

    //DropZone HTML5
    $("[dropzone]").on('drop', function(event)
    {
        event.preventDefault();

        // if( not(Webkit)) ? firefox : webkit;
        var files = (event.dataTransfer === undefined) ? event.originalEvent.dataTransfer.files : event.dataTransfer.files;

        showThumbnail(files)
    });

    //https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    function showThumbnail(files)
    {
        for(var i=0;i<files.length;i++)
        {
            var reader  = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onloadend = function () {
              $("#myForm_photosArea").append('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"><img src="' + reader.result + '" class="mini"><div class="img-overlay"><h3>X</h3></div></div></div>');
          }
        }

        //Prevent speedy gonzales
        setTimeout(function() { $(".img-overlay").click(function() { $(this).parent().remove(); }); }, 250);
    }

});
