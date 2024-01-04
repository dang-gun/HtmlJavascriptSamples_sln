"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        /** 지금 보여주고 있는 페이지에서 사용할 개체 */
        this.PageNow = null;
        //메뉴 추가
        let divMain = document.getElementById("divMain");
        divMain.innerHTML = "Test";
    }
}
exports.default = App;
window.app = new App();
//# sourceMappingURL=index.js.map