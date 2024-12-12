import java.util.Scanner;

public class Hcfeasy1 {
    public static int getHcf(int a, int b) {
        int small = (a < b) ? a : b;
        for (int i = small;; i--) {
            if (a % i == 0 && b % i == 0) {
                return i;

            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st Num:- ");
        int a = sc.nextInt(); // getLcm(a, b, c);
        int hcf = a;
        char c;
        do {
            System.out.println("Enter the next num");
            int b = sc.nextInt();
            hcf = getHcf(a, b);
            System.out.println("press Y/y to continue..");
            c = sc.next().charAt(0);
        } while (c == 'Y' && c == 'y');
        System.out.println("HCF  is : " + hcf);
        // int Lcm = getLcm(a, b, c);
        // System.out.println("Lcm is: " +lcm);

    }

}
