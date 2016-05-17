

var myTextArea1 = document.getElementById('munchies1')
var myTextArea2 = document.getElementById('munchies2')
var myTextArea3 = document.getElementById('munchies3')
var myTextArea4 = document.getElementById('munchies4')


var editorBatch1 = CodeMirror.fromTextArea(myTextArea1, {
    lineNumbers: true,
    mode: "javascript",
    theme: "monokai"
  });

var editorBatch2 = CodeMirror.fromTextArea(myTextArea2, {
    lineNumbers: true,
    mode: "javascript",
    theme: "monokai"
  });

var editorBatch3 = CodeMirror.fromTextArea(myTextArea3, {
    lineNumbers: true,
    mode: "javascript",
    theme: "monokai"
  });

var editorBatch4 = CodeMirror.fromTextArea(myTextArea4, {
    lineNumbers: true,
    mode: "javascript",
    theme: "monokai"
  });


editorBatch1.getDoc().setValue('var munchkins = ["kim", "tim", "sim", "bim", "whim"] ;\n/*write your code starting here!*/');
// console.log(editor.getDoc().getValue());

// var myCodeMirror = codeMirror.fromTextArea(myTextArea);

// var mycodeMirror = CodeMirror(document.body);
