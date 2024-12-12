import java.util.Scanner;

public class LowOrUppCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Alphabet");
        char alphabet = sc.next().charAt(0);
        if (alphabet >= 'a' && alphabet <= 'z') {
            System.out.println(alphabet + " It is Lower case character");

        } else if (alphabet >= 'A' && alphabet <= 'Z') {
            System.out.println(alphabet + " It is an Uppercase Character");

        } else {
            System.out.println(alphabet + " It is not any lower or Upper case belong.");
        }
    }
}
