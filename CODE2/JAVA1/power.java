import java.util.Scanner;

public class power {

    // package methodprogarm;
    // Design a method to take two number and return max number.

     
        public static double powNumber(int a, int b) {
            return Math.pow(a, b);

        }

        public static void main(String[] arg) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the Number");
            int x = sc.nextInt();
            int y = sc.nextInt();
            System.out.println("Two number Power");
            System.out.println(powNumber(x, y));
        }

    }


