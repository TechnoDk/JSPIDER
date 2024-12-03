import java.util.Scanner;
class Power
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENter a: ");
		int a=sc.nextInt();
		System.out.println("ENter b: ");
		int b=sc.nextInt();
		int pow=1;
		int i=1;
		while(i<=b){
			pow=pow*a;
		i++;
		}
		System.out.println(a+" to power "+b+" is: "+pow);
	}
}