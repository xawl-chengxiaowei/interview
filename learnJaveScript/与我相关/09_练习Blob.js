
// const blob = new Blob(["hello world"], { type: "text/plain" })// 纯文本文档.

// console.log("blob", blob);

// // 我们可以通过URL.createObjectURL 方法将其转化为一个URL
// const Url = URL.createObjectURL(blob)
// console.log("Url", Url);

window.onload = function () {
    const iframe = document.getElementsByTagName("iframe")[0];
    const blob = new Blob(["Hello World"], { type: "text/plain" });
    iframe.src = URL.createObjectURL(blob);
}