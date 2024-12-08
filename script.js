let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");

btn.addEventListener("click", () => {
    JsBarcode("#barcode", input.value, {
        formate: "code128",
        displayValue:true,
        fontsize:20,
        lineColor: "#000",
    });
});
window.onload = (event) => {
    input.value = "";
};