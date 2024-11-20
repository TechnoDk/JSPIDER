import java.util.Scanner;

public class threeNum {
    public static void getLcm(int a, int b, int c) {
        for (int i = 1;; i++) {
            if (i % a == 0 && i % b == 0 && i % c == 0) {
                System.out.println("Lcm is : " + i);
                break;
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
        getLcm(a, b, c);

    }
}