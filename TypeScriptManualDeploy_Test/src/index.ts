import ReleaseClassTest from "./Utility/ReleaseClass/ReleaseClassTest";
//import { ReleaseClassTest } from "@OneFile";
//import m = require("./Utility/ReleaseClass_OneFile/ReleaseClass_OneFile");

export default class App
{
	/** 지금 보여주고 있는 페이지에서 사용할 개체 */
	public PageNow: any = null;

	constructor()
	{
		//메뉴 추가
		let divMain = document.getElementById("divMain");
		divMain.innerHTML = "Test";

		let temp: ReleaseClassTest = new ReleaseClassTest();
		console.log(temp.TestString());
	}

}

(window as any).app = new App();
