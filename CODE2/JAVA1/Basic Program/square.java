
// Design a method to take a number and return square of that number take the
// number by user input.
/**
 * square
 */
import java.util.Scanner;

public class square {

    public static int Square(int x) {

        System.out.println("Square is :");
        return x * x;
    }

    public static void main(String[] arg) {
        System.out.println("Enter the number:");
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = Square(x);
        System.out.println(y);

    }
}