//1/1+1/2+1/3+1/4+.......1/100
class Sum3
{
	public static void main(String[] args)
	{
		double sum=0;
		int i=1;
		while(i<=100){
			sum=sum+(1.0/i);
		i++;
		}
		System.out.println("Sum of All Numbers is: "+sum);
	}
}