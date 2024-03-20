System.register("res/ReleaseClass2Test", [], function (exports_1, context_1) {
    "use strict";
    var ReleaseClassTest2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * 출력 테스트 원본
             */
            ReleaseClassTest2 = /** @class */ (function () {
                /**테스트를 위한 비어있는 생성자*/
                function ReleaseClassTest2() {
                }
                /**
                 * 테스트 메시지
                 * @returns
                 */
                ReleaseClassTest2.prototype.TestString = function () {
                    return "Test0_2";
                };
                return ReleaseClassTest2;
            }());
            exports_1("default", ReleaseClassTest2);
        }
    };
});
System.register("ReleaseClassTest", ["res/ReleaseClass2Test"], function (exports_2, context_2) {
    "use strict";
    var ReleaseClass2Test_1, ReleaseClassTest;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (ReleaseClass2Test_1_1) {
                ReleaseClass2Test_1 = ReleaseClass2Test_1_1;
            }
        ],
        execute: function () {
            /**
             * 출력 테스트 원본
             */
            ReleaseClassTest = /** @class */ (function () {
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
                    var temp = new ReleaseClass2Test_1.default();
                    return temp.TestString();
                };
                return ReleaseClassTest;
            }());
            exports_2("default", ReleaseClassTest);
        }
    };
});
System.register("res/ReleaseClass3Test", [], function (exports_3, context_3) {
    "use strict";
    var ReleaseClassTest3;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            /**
             * 출력 테스트 원본
             */
            ReleaseClassTest3 = /** @class */ (function () {
                /**테스트를 위한 비어있는 생성자*/
                function ReleaseClassTest3() {
                }
                /**
                 * 테스트 메시지
                 * @returns
                 */
                ReleaseClassTest3.prototype.TestString = function () {
                    return "Test0_3";
                };
                return ReleaseClassTest3;
            }());
            exports_3("default", ReleaseClassTest3);
        }
    };
});
