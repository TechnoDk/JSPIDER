
import java.util.Scanner;

public class bigTwoNum {

    public static void main(String[] args) {

        int a;
        int b;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Num1");
        a = sc.nextInt();
        System.out.println("Enter second Num2");
        b = sc.nextInt();
        int c = a > b ? a : b;
        System.out.println(c);

    }
}
