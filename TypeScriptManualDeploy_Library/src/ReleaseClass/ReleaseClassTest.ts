import ReleaseClassTest2 from "./res/ReleaseClass2Test";

/**
 * 출력 테스트 원본
 */
export default class ReleaseClassTest
{
	/**테스트를 위한 비어있는 생성자*/
	constructor()
	{
		
	}

	/**
	 * 테스트 메시지
	 * @returns
	 */
	public TestString(): string
	{
		return "Test0";
	}

	/**
	 * 테스트 메시지2
	 * @returns
	 */
	public TestString2(): string
	{
		let temp: ReleaseClassTest2 = new ReleaseClassTest2();
		return temp.TestString();
	}
	 
}

