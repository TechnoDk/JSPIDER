import java.util.Scanner;

public class method4 {
    public static int twoInput(int a, int b) {
        if (a < b) {
            System.out.println("smaller than b ");
            return a;

        } else if (b < a) {
            System.out.println("smaller than a");
            return b;
        }
        return 0;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("First number");
        int a = sc.nextInt();
        System.out.println("second Number");
        int b = sc.nextInt();
        System.out.println(twoInput(a, b));
    }
}
