import java.util.*;
public class Player {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Game g = new Game();
		char c;
		do {
			int choice = g.selectShape();
			if(choice==1) {
				System.out.println("You have Selected TwoDShape");
				TwoDShape t1=g.selectTwoDShape();
				t1.getArea();
				t1.getPerimeter();
			}
			else {
				System.out.println("You have Selected ThreeDShape");
				ThreeDShape t1=g.selectThreeDShape();
				t1.getVolume();
				t1.getLSA();
				t1.getTSA();
			}
			System.out.print("Press y/Y for Continue: ");
			c = sc.next().charAt(0);
		}while(c=='y' || c=='Y');
		System.out.println("Thank You...Game End!");
	}
}
