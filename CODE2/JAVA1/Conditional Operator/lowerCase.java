import java.util.Scanner;

public class lowerCase {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a character: ");
        char ch = scanner.next().charAt(0); // Reading a single character

        String result = ((ch >= 'a' && ch <= 'z'))
                ? "The character is lower case."
                : "The character is not lower case5.";

        System.out.println(result);

    }
}
