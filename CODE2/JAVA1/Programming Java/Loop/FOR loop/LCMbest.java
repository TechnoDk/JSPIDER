import java.util.Scanner;

public class LCMbest {
public static int getLcm(int a, int b, int c) {
        int big = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        for (int i = big ;; i+=big) {
            if (i % a == 0 && i % b == 0 && i % c == 0) {
                return i;

            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter num1: ");
        int a = sc.nextInt();
        System.out.println("Enter num2: ");
        int b = sc.nextInt();
        System.out.println("Enter num3: ");
        int c = sc.nextInt();
        // getLcm(a, b, c);
        int lcm = getLcm(a, b, c);
        System.out.println("Lcm is: " +lcm);

    }
}
