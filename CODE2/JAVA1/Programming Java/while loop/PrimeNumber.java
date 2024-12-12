import java.util.Scanner;
class PrimeNumber
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENter the Number: ");
		int n=sc.nextInt();
		int count=0;
		int i=1;
		while(i<=n/2){
			System.out.println("Loop Execution is: "+i);
			if(n%i==0){
				count++;
			}	
		i++;
		}
		if(count==1)
			System.out.println(n+" is a Prime Number");
		else
			System.out.println(n+" is NOT a Prime Number");

	}
}



