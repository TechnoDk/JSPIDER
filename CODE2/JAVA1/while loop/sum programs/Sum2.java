//Sum of all odd numbers divisible by 3
class Sum2
{
	public static void main(String[] args)
	{
		int sum=0;
		int i=1;
		while(i<=100){
			if(i%2==1 && i%3==0)
				sum=sum+i;
		i++;
		}
		System.out.println("Sum of All Numbers is: "+sum);
	}
}