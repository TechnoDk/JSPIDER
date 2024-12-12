//-ve direction infinite loop
class Program4
{
	public static void main(String[] args)
	{
		System.out.println("main starts");
		int i=0;
		while(i<1){
			System.out.println("Java Program: "+i);
		i--;
		}
	}
}