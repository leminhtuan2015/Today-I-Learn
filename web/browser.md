### What is browser used for?
### Languages run on browser?
### How browser communicate with server?
### Form, AJAX, Link send data to server


url: '/moodle/koolsoft/file/?action=download&id=<?php echo $question->id ?>',  => Ban chất là tạo ra 1 json object {action: download, id: 1}


--

Combin send data by LINK and OBJECt

$.ajax({
            type: 'get',
            url: '/moodle/koolsoft/file/?action=download',
            data: {id: fileId},
            success: function (result) {

                $("#modal_container").empty()
                $("#modal_container").html(result)

                $('#showDetailQuestionDialog').modal('show');
            }
        });
