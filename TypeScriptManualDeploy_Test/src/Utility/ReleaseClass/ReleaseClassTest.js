import ReleaseClassTest2 from "./res/ReleaseClass2Test";
/**
 * 출력 테스트 원본
 */
var ReleaseClassTest = /** @class */ (function () {
    /**테스트를 위한 비어있는 생성자*/
    function ReleaseClassTest() {
    }
    /**
     * 테스트 메시지
     * @returns
     */
    ReleaseClassTest.prototype.TestString = function () {
        return "Test0";
    };
    /**
     * 테스트 메시지2
     * @returns
     */
    ReleaseClassTest.prototype.TestString2 = function () {
        var temp = new ReleaseClassTest2();
        return temp.TestString();
    };
    return ReleaseClassTest;
}());
export default ReleaseClassTest;
