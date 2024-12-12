import java.util.Scanner;
class ShoppingCartProject
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		int total=0;
		System.out.println("Enter the Number of Items: ");
		int n=sc.nextInt();
		int i=1;
		while(i<=n){
			System.out.println("Enter the Price of Item: "+i);
			int price=sc.nextInt();
			total=total+price;
		i++;
		}
		System.out.println("Total Price is: "+total+" Rupees");
		if(total>=10000){
			System.out.println("You got a discount of 40% on Shopping of "+total+" Rupees");
			System.out.println("You have to pay "+total*0.6+" Rupees");
		}
		else if(total>=7000){
			System.out.println("You got a discount of 30% on Shopping of "+total+" Rupees");
			System.out.println("You have to pay "+total*0.7+" Rupees");
		}
		else if(total>=3000){
			System.out.println("You got a discount of 20% on Shopping of "+total+" Rupees");
			System.out.println("You have to pay "+total*0.8+" Rupees");
		}
		else{
			System.out.println("You got a discount of 8% on Shopping of "+total+" Rupees");
			System.out.println("You have to pay "+total*0.92+" Rupees");
		}
		System.out.println("======Thank You for Shopping===========");
	}
}






