package Printf;

import java.util.Scanner;

public class NumberTriangle {
    public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Number of rows: ");
		int n=sc.nextInt();
		printPattern(n);
	}
	public static void printPattern(int n){
		int star=1;		int space=n-1;	int x=1;
		String s1=" ";
		for(int i=1;i<=n;i++){
			for(int j=1;j<=space;j++)
				System.out.print("    ");
			for(int j=1;j<=star;j++){
				System.out.printf("%4d",x);
			x--;
			}
		x=x+2*i+1;
		star++;	space--;	
		System.out.println();
		}
	}
}
