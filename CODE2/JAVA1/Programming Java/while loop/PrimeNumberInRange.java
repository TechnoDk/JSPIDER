import java.util.Scanner;
class PrimeNumberInRange
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENter the Range: ");
		int range=sc.nextInt();
		int pr_count=0;
		int j=2;
		while(j<=range)
		{
			int n=j;
			int count=0;
			int i=1;
			while(i<=n/2){
				if(n%i==0){
					count++;
				}	
			i++;
			}
			if(count==1){
				System.out.print(n+" ");
				pr_count++;
			}
		j++;
		}
		System.out.println("\nTotal Prime Numbers are: "+pr_count);
	}
}



