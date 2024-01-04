
export default class App
{
	/** 지금 보여주고 있는 페이지에서 사용할 개체 */
	public PageNow: any = null;

	constructor()
	{
		//메뉴 추가
		let divApp: HTMLDivElement
			= document.getElementById("app") as HTMLDivElement;
		divApp.innerHTML = "Test";
	}

}

(window as any).app = new App();
