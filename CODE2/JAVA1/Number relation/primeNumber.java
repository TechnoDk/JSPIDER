import java.util.Scanner;
class PrimeNumber
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENter the Number: ");
		int n=sc.nextInt();
		if(isPrime(n))
			System.out.println(n+" is a Prime Number");
		else
			System.out.println(n+" is NOT a Prime Number");
	}
	public static boolean isPrime(int n){
		if(n<2)
			return false;
		for(int i=2;i*i<=n;i++){
			if(n%i==0)
				return false;
		}
	return true;
	}
}


