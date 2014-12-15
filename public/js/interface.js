$(document).ready(function() {

  var text = 'Thank you for downloading the "Sinatra_Template" Gem, As you may have noticed CSS, Normalize and Jquery have all been required so that you are ready to go build this page quickly and easily. Simply start editing from "index.erb" and the related files. *** Remember to remove the ".git" file and update the "readme.md" if you are going to create your own repository from this template.***\n\nENJOY! :-)';
            $('button').click(function(){
                var span = $('<span/>').insertAfter(this);
                $(this).remove();
                jQuery({count:0}).animate({count:text.length}, {
                    duration: 30000,
                    step: function() {
                        span.text( text.substring(0, Math.round(this.count)) );
                    },
                });
            });

});