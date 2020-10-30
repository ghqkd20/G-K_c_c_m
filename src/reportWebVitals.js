/*
import './codemirror.css'
import './darcula.css'
import './codemirror.js'
import './clike.js'
import './python.js'
/*
import '../public/CodeMirror/lib/codemirror.js'
import '../public/CodeMirror/mode/clike/clike.js'
import '../public/CodeMirror/mode/python/python.js'
*/
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/*
  var editor;
  editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        // 언어 스타일 정의하는 부분 mode를 ./public/mode 내의 폴더명 중 하나로 선택하면 그 스타일로 변경됨 +
        // 변경을 위해서는 최상단에 script 태그로 폴더 경로와 폴더내 js파일 추가해줘야 함함
        mode: "text/x-csrc",
        gutters:["CodeMirror-lint-markers"],
        lint: true,
        styleActiveLine: true,
        matchBrackets: true
    });
    editor.setOption("theme", "darcula");
    //$('#code').val(editor.getValue());
*/
export default reportWebVitals;
