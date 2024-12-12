import java.util.Scanner;

public class getH {
    public static int getLcm(int a, int b) {
        int big = (a > b) ? a : b;
        for (int i = big;; i += big) {
            if (i % a == 0 && i % b == 0) {
                return i;

            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st Num:- ");
        int a = sc.nextInt(); // getLcm(a, b, c);
        int lcm = a;
        char c;
        do {
            System.out.println("Enter the next num");
            int b = sc.nextInt();
            lcm = getLcm(lcm, b);
            System.out.println("press Y/y to continue..");
            c = sc.next().charAt(0);
        } while (c == 'Y' && c == 'y');
        System.out.println("LCM is :" + lcm);
        // int Lcm = getLcm(a, b, c);
        // System.out.println("Lcm is: " +lcm);

    }

}
