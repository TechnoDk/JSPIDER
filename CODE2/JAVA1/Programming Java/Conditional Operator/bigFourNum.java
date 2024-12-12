import java.util.Scanner;

public class bigFourNum {
    public static void main(String[] args) {

        int a;
        int b;
        int c;
        int d;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Num1");
        a = sc.nextInt();
        System.out.println("Enter second Num2");
        b = sc.nextInt();
        System.out.println("Enter Num3:");
        c = sc.nextInt();
        System.out.println("Enter Num4:-");
        d = sc.nextInt();
        System.out.println("Bigger num among all four num");
        int answer = (a > b) ? ((a > c) ? ((a > d) ? a : d) : (c > d ? c : d))
                : ((b > c) ? ((b > d) ? b : d) : (c > d ? c : d));
        System.out.println(answer);
    }

}