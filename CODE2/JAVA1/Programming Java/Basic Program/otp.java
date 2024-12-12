import java.util.Scanner;

// two digit return with method using and without using method in one progaram 
public class otp {

    public static int number(int a, int b) {

        int num = (int) (Math.random() * (b - a) + a);
        System.out.println(num);
        if (a > b) {
            return b;
        } else {
            return a;
        }

    }

    public static void main(String[] arg) {
        System.out.println("Enter Number");
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        System.out.println("Enter Number method");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int num = (int) (Math.random() * (y - x) + x);

        System.out.println("two digit return1");
        System.out.println(num);

        int num1 = number(a, b);
        System.out.println("two digit return2");
        System.out.println(num1);

    }

}
