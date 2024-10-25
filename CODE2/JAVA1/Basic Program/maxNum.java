
// package methodprogarm;
// Design a method to take two number and return max number.
import java.util.Scanner;

public class maxNum {
    public static int maxOfNumber(int a, int b) {
        return Math.max(a, b);

    }

    public static void main(String[] arg) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number");
        int x = sc.nextInt();
        int y = sc.nextInt();
        System.out.println("Max Number Return");
        System.out.println(maxOfNumber(x, y));
    }

}
