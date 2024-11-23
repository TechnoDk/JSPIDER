import java.util.Scanner;

class LCM4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter 1st Number");
        int a = sc.nextInt();
        System.out.println("ENter 2nd Number");
        int b = sc.nextInt();
        System.out.println("ENter 3rd Number");
        int c = sc.nextInt();
        System.out.println("ENter 4th Number");
        int d = sc.nextInt();
        int lcm = getLCM(getLCM(a, b), getLCM(c, d));
        System.out.println("LCM is: " + lcm);
    }

    public static int getLCM(int a, int b) {
        int big = (a > b) ? a : b;
        for (int i = big;; i += big) {
            if (i % a == 0 && i % b == 0) {
                return i;
            }
        }
    }
}
