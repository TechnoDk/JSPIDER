import java.util.Scanner;
class ElectricityChargeCalculationProject
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		double cost=0.0;
		System.out.println("Enter the Old Unit Reading: ");
		int oldUnit=sc.nextInt();
		System.out.println("Enter the Current Unit Reading: ");
		int currentUnit=sc.nextInt();
		int totalunitConsumed;
		if(currentUnit>oldUnit){
			totalunitConsumed=currentUnit-oldUnit;
			System.out.println("Total Consumption is: "+totalunitConsumed+" Unit");
		}
		else{
			System.out.println("Invalid Unit ENtered");
			return;
		}
		if(totalunitConsumed>100)
			cost=50*1.25+20*1.75+30*2.25+(totalunitConsumed-100)*3;
		else if(totalunitConsumed>70)
			cost=50*1.25+20*1.75+(totalunitConsumed-70)*2.25;
		else if(totalunitConsumed>50)
			cost=50*1.25+(totalunitConsumed-50)*1.75;
		else
			cost=totalunitConsumed*1.25;
		double totalCost=cost*1.2;
		System.out.println("Total Cost is: "+totalCost+" Rupees");
	System.out.println("======Thank You===========");
	}
}






