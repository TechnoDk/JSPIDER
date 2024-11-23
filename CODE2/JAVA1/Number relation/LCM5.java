import java.util.Scanner;

class LCM5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter 1st Number");
        int a = sc.nextInt();
        int lcm = a;
        char c;
        do {
            System.out.println("ENter the Next Number");
            int b = sc.nextInt();
            lcm = getLCM(lcm, b);
            System.out.println("Press Y/y to continue...");
            c = sc.next().charAt(0);
        } while (c == 'Y' || c == 'y');
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
