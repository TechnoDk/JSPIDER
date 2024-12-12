import java.util.Scanner;
class Factor
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENter the Number: ");
		int n=sc.nextInt();
		int count=0;
		System.out.println("All the Factors of "+n+" are Below: ");
		int i=1;
		while(i<=n/2){
			if(n%i==0){
				System.out.print(i+" ");
				count++;
			}	
		i++;
		}
		System.out.println("\nTotal Factors are: "+count);
	}
}