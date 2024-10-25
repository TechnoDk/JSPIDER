import java.util.Scanner;

public class bigThreeNum {
    public static void main(String[] args) {

        int a;
        int b;
        int c;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Num1");
        a = sc.nextInt();
        System.out.println("Enter second Num2");
        b = sc.nextInt();
        System.out.println("Enter Num3:");
        c = sc.nextInt();
        int answer = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        System.out.println(answer);

    }
}
